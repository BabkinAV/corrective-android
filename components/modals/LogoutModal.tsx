import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, Portal, Text } from 'react-native-paper';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { resetAuth } from '../../store/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutModal = ({
  isModalVisible,
  hideModal,
}: {
  isModalVisible: boolean;
  hideModal: () => void;
}) => {
  const dispatch = useAppDispatch();

  const handleYesButtonClick = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        dispatch(resetAuth());
        hideModal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Portal>
      <Modal
        visible={isModalVisible}
        onDismiss={hideModal}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.confirmationText}>
          Are you sure you want to logout?
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

export default LogoutModal;

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
