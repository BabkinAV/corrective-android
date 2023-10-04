import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';
import { instructionStatus } from '../../types/dataTypes';

const ChangeStatusModal = ({
  isUpdatingStatus,
  handleYesButtonClick,
  hideModal,
  documentSelectedNumber,
}: {
  isUpdatingStatus: instructionStatus | '';
  handleYesButtonClick?: () => void;
  hideModal?: () => void;
  documentSelectedNumber: number;
}) => {
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
          <Button mode="contained" onPress={handleYesButtonClick}>
            Yes
          </Button>
          <Button mode="outlined" onPress={hideModal}>
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
