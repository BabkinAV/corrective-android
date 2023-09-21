import React from 'react';
import dayjs from 'dayjs';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import StatusChip from '../components/StatusChip';
import { theme } from '../theme';
import * as Linking from 'expo-linking';
import { instructionStatus } from '../types';

const InstructionItem = ({
  instructionNumber,
  instructionTitle,
  documentType,
  subsystem,
  date,
  downloadLink,
	status
}: {
  instructionNumber: string;
  instructionTitle: string;
  documentType: string;
  subsystem: string;
  date: string;
  downloadLink: string;
	status: instructionStatus
}) => {
  return (
    <View style={styles.instructionContainer}>
      <View style={styles.instructionNumberContainer}>
        <Text variant="bodyLarge" style={styles.instructionNumber}>
          {instructionNumber}
        </Text>
        <View style={styles.chipContainer}>
          <StatusChip status={status} />
        </View>
      </View>
      <View style={styles.instructionTitleContainer}>
        <Text variant="bodyLarge" style={styles.instructionTitle}>
          {instructionTitle}
        </Text>
      </View>
      <View style={styles.instructionBodyContainer}>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            Document type
          </Text>
          <Text
            variant="bodyLarge"
            style={{ flexShrink: 1, textAlign: 'right' }}
          >
            {documentType}
          </Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            Subsystem
          </Text>
          <Text
            variant="bodyLarge"
            style={{ flexShrink: 1, textAlign: 'right' }}
          >
            {subsystem}
          </Text>
        </View>
        <View style={styles.documentTypeContainer}>
          <Text variant="bodyLarge" style={{ flexShrink: 1 }}>
            Date
          </Text>
          <Text
            variant="bodyLarge"
            style={{ flexShrink: 1, textAlign: 'right' }}
          >
            {dayjs(date).format('DD.MM.YYYY')}
          </Text>
        </View>
        <Button
          mode="contained"
          style={styles.downloadButton}
          uppercase
          onPress={() =>
            Linking.openURL(process.env.EXPO_PUBLIC_STATIC_URL + downloadLink)
          }
        >
          Download
        </Button>
      </View>
    </View>
  );
};

export default InstructionItem;

const styles = StyleSheet.create({
  instructionContainer: {},
  instructionNumberContainer: {
		paddingTop: 15, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  chipContainer: {
    position: 'absolute',
    top: 15,
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
  },
  documentTypeContainer: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  downloadButton: {
    marginTop: 20,
    marginHorizontal: '20%',
    paddingVertical: 3,
  },
});
