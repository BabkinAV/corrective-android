import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ActivityIndicator, Divider } from 'react-native-paper';
import InstructionItem from '../UI/InstructionItem';
import { instructionArray } from '../../data';
import { useAppSelector } from '../../hooks/reduxHooks';
import {
  selectDocuments,
  selectErrorFetching,
  selectIsDataLoading,
} from '../../store/reducers/documentsReducer';
import { theme } from '../../theme';

const DocumentList = () => {
  const documents = useAppSelector(selectDocuments);
  const errorFetchingDocuments = useAppSelector(selectErrorFetching);
  const isDataLoading = useAppSelector(selectIsDataLoading);
  return (
    <View style={styles.listContainer}>
      {isDataLoading && <ActivityIndicator style={{paddingTop: 20}}/>}
      {errorFetchingDocuments && (
        <Text
          style={[
            styles.textInfo,
            errorFetchingDocuments !== 'Could not find unit.' && { color: theme.colors.red100 },
          ]}
        >
          {errorFetchingDocuments}
        </Text>
      )}
      {!isDataLoading &&
        !errorFetchingDocuments &&
        (documents.length > 0 ? (
          <FlatList
            data={documents}
            renderItem={({ item, index }) => (
              <>
                <InstructionItem
                  instructionNumber={item.instruction.instNumber}
                  instructionTitle={item.instruction.title}
                  documentType={item.instruction.instType}
                  subsystem={item.instruction.subsystem}
                  date={item.instruction.releaseDate}
                  downloadLink={item.instruction.link}
                  status={item.status}
                />
                {index !== instructionArray.length - 1 && (
                  <Divider style={{ marginTop: 10 }} bold />
                )}
              </>
            )}
            keyExtractor={item => item._id}
          />
        ) : (
          <Text style={styles.textInfo}>No unit has been found!</Text>
        ))}
    </View>
  );
};

export default DocumentList;

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  spinner: {
    paddingTop: 20,
  },
  textInfo: {
    paddingTop: 15,
    textAlign: 'center',
  },
});
