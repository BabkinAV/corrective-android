import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import StatusChip from '../components/StatusChip';
import { theme } from '../theme';

const InstructionItem = () => {
  return (
    <View style={styles.instructionContainer}>
      <View style={styles.instructionNumberContainer}>
        <Text variant="bodyLarge" style={styles.instructionNumber}>
          BD-21-01
        </Text>
        <View style={styles.chipContainer}>
          <StatusChip />
        </View>
      </View>
      <View style={styles.instructionTitleContainer}>
        <Text variant="bodyLarge" style={styles.instructionTitle}>
          Some title of instruction Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Proin placer
        </Text>
      </View>
      <View style={styles.instructionBodyContainer}>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            Document type
          </Text>
          <Text variant="bodyLarge" style={{ flexShrink: 1, textAlign: 'right' }}>
            Technical information
          </Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            Subsystem
          </Text>
          <Text variant="bodyLarge" style={{ flexShrink: 1, textAlign: 'right' }}>
            Date
          </Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            12.08.2018
          </Text>
          <Text variant="bodyLarge" style={{ flexShrink: 1, textAlign: 'right' }}>
            Software
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InstructionItem;

const styles = StyleSheet.create({
  instructionContainer: {},
  instructionNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  chipContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  instructionTitleContainer: {
    paddingTop: 12,
  },
  instructionNumber: {
    color: theme.colors.grey100,
  },
  instructionTitle: {
    color: theme.colors.grey100,
  },
  instructionBodyContainer: {
    paddingTop: 30,
		paddingBottom: 5,
    width: 250,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'red',
    borderWidth: 1,
		
  },
  documentTypeContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
		paddingBottom: 10
  },
});
