import React from 'react';
import { View, Text } from 'react-native';
import { Portal, Snackbar } from 'react-native-paper';
import { snackbarColor } from '../../types/uiTypes';
import { theme } from '../../theme';

const EditStatusSnackbar = ({
  handleDismissSnackbar,
  snackbarMessage,
  snackbarColor,
}: {
  handleDismissSnackbar: () => void;
  snackbarMessage: string;
  snackbarColor: snackbarColor;
}) => {
  return (
    <Portal>
      <Snackbar
        visible={Boolean(snackbarMessage)}
        onDismiss={handleDismissSnackbar}
        action={{
          label: 'close',
          textColor: '#fff',
        }}
      >
        <Text
          style={{
            color:
              snackbarColor === 'error'
                ? theme.colors.red100
                : theme.colors.green100,
          }}
        >
          {snackbarMessage}
        </Text>
      </Snackbar>
    </Portal>
  );
};

export default EditStatusSnackbar;
