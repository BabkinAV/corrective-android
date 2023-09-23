import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import InstructionItem from '../components/InstructionItem';
import { instructionArray } from '../data';
import { useAppSelector } from '../hooks/reduxHooks';
import { selectDocuments } from '../store/reducers/documentsReducer';

const DocumentList = () => {
  const documents = useAppSelector(selectDocuments);
  return (
    <View style={styles.listContainer}>
      {documents.length > 0 ? (
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
        <Text>Loading....</Text>
      )}
    </View>
  );
};

export default DocumentList;

const styles = StyleSheet.create({
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
