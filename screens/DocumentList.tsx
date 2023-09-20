import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import InstructionItem from '../components/InstructionItem';

const DocumentList = () => {
  return (
    <View>
      <Text>DocumentList</Text>
      <View style={styles.listContainer}>
      <InstructionItem />
      </View>
    </View>
  );
};

export default DocumentList;

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 10,
  },
 
});
