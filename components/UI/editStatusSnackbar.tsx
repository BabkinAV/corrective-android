import React from 'react';
import { Portal, Snackbar } from 'react-native-paper';

const editStatusSnackbar = ({
  snackbarIsVisible,
  handleDismissSnackbar,
	snackbarMessage
}: {
  snackbarIsVisible: boolean;
  handleDismissSnackbar: () => void;
	snackbarMessage: string
}) => {
  return (
    <Portal>
      <Snackbar
        visible={snackbarIsVisible}
        onDismiss={handleDismissSnackbar}
        action={{
          label: 'close',
        }}
      >
        This is a Snackbar wrapped with Portal.
      </Snackbar>
    </Portal>
  );
};

export default editStatusSnackbar;
