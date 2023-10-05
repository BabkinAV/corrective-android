import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { instructionStatus } from '../../types/dataTypes';
import { useAppSelector } from '../../hooks/reduxHooks';
import { selectIsDataLoading } from '../../store/reducers/documentsReducer';

const ChangeStatusModal = ({
  isUpdatingStatus,
  handleYesButtonClick,
  hideModal,
  documentSelectedNumber,
}: {
  isUpdatingStatus: instructionStatus | '';
  handleYesButtonClick: (newStatus: instructionStatus) => void;
  hideModal?: () => void;
  documentSelectedNumber: number;
}) => {
  const isDataSubmitting = useAppSelector(selectIsDataLoading);
  return (
    <Portal>
      <Modal
        visible={Boolean(isUpdatingStatus)}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.confirmationText}>
          Are you sure you want to change status of {documentSelectedNumber}{' '}
          document{documentSelectedNumber > 1 && 's'} to '{isUpdatingStatus}'?
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            mode="contained"
            disabled={isDataSubmitting}
            onPress={
              isUpdatingStatus
                ? () => handleYesButtonClick(isUpdatingStatus)
                : () => null
            }
          >
            Yes
          </Button>
          <Button
            mode="outlined"
            disabled={isDataSubmitting}
            onPress={hideModal}
          >
            No
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

export default ChangeStatusModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 20,
  },
  confirmationText: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 30,
    justifyContent: 'center',
    gap: 20,
  },
});
