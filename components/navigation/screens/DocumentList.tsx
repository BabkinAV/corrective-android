import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { ActivityIndicator, Divider } from 'react-native-paper';
import InstructionItem from '../../UI/InstructionItem';
import { instructionArray } from '../../../data';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import {
	resetSelected,
  selectDocuments,
  selectErrorFetching,
  selectIsDataLoading,
  selectSelectedDocumentIdsLength,
} from '../../../store/reducers/documentsReducer';
import { theme } from '../../../theme';
import EditStatusFAB from '../../UI/EditStatusFAB';
import { instructionStatus } from '../../../types/dataTypes';
import ChangeStatusModal from '../../modals/ChangeStatusModal';
import { selectIsAuth } from '../../../store/reducers/authReducer';

// NOTE: Update status of items for the unit: https://github.com/BabkinAV/Corrective/blob/master/src/redux/actions/dataActions.js#L68-L78

const DocumentList = () => {
  const documents = useAppSelector(selectDocuments);
  const errorFetchingDocuments = useAppSelector(selectErrorFetching);
  const isDataLoading = useAppSelector(selectIsDataLoading);
	const isAuth = useAppSelector(selectIsAuth);
  const selectedDocumentsIdsLength = useAppSelector(
    selectSelectedDocumentIdsLength
  );
	const dispatch = useAppDispatch()
  const [isUpdatingStatus, setIsUpdatingStatus] = useState<
    instructionStatus | ''
  >('');

	const handleActionItemPress = (status: instructionStatus) => {
		setIsUpdatingStatus(status);
	}

  return (
    <View style={styles.listContainer}>
      {isDataLoading && <ActivityIndicator style={{ paddingTop: 20 }} />}
      {errorFetchingDocuments && (
        <Text
          style={[
            styles.textInfo,
            errorFetchingDocuments !== 'Could not find unit.' && {
              color: theme.colors.red100,
            },
          ]}
        >
          {errorFetchingDocuments}
        </Text>
      )}
      {!isDataLoading &&
        !errorFetchingDocuments &&
        (documents.length > 0 ? (
          <>
            <FlatList
              data={documents}
              renderItem={({ item, index }) => (
                <>
                  <InstructionItem
										editable={isAuth}
                    instructionNumber={item.instruction.instNumber}
                    instructionTitle={item.instruction.title}
                    documentType={item.instruction.instType}
                    subsystem={item.instruction.subsystem}
                    date={item.instruction.releaseDate}
                    downloadLink={item.instruction.link}
                    status={item.status}
                    docId={item._id}
                  />
                  {index !== instructionArray.length - 1 && (
                    <Divider style={{ marginTop: 10 }} bold />
                  )}
                </>
              )}
              keyExtractor={item => item._id}
            />
            <ChangeStatusModal
              isUpdatingStatus={isUpdatingStatus}
              hideModal={() => setIsUpdatingStatus('')}
							documentSelectedNumber={selectedDocumentsIdsLength}
            />
            {selectedDocumentsIdsLength > 0 && <EditStatusFAB handleActionItemPress={handleActionItemPress}/>}
          </>
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
