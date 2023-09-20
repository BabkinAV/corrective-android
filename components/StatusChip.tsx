import React from 'react';
import { Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { theme } from '../theme';

const StatusChip = () => {
  return (
    <Chip
      icon="information"
      mode="outlined"
      style={styles.statusChip}
      compact
      textStyle={styles.chipText}
    >
      Open
    </Chip>
  );
};

export default StatusChip;

const styles = StyleSheet.create({
  statusChip: {
    borderRadius: 50,
    marginLeft: 'auto',
    borderColor: theme.colors.primary,
  },
  chipText: { marginVertical: 1, color: theme.colors.primary },
});
