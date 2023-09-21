import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Divider } from 'react-native-paper';
import InstructionItem from '../components/InstructionItem';
import { instructionArray } from '../data';
import { instructionStatus } from '../types';

const DocumentList = () => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={instructionArray}
        renderItem={({ item, index }) => (
          <>
            <InstructionItem
              instructionNumber={item.instNumber}
              instructionTitle={item.title}
              documentType={item.instType}
              subsystem={item.subsystem}
              date={item.releaseDate.$date}
              downloadLink={item.link}
              status={item.status as instructionStatus}
            />
            {index !== instructionArray.length - 1 && (
              <Divider style={{ marginTop: 10 }} bold />
            )}
          </>
        )}
        keyExtractor={item => item._id.$oid}
      />
    </View>
  );
};

export default DocumentList;

const styles = StyleSheet.create({
  listContainer: {},
});
