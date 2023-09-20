import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Home = ({ onSearchButtonPress }: { onSearchButtonPress: () => void }) => {
  return (
    <View>
      <TextInput label="Serial no..." style={styles.searchInput} />
      <Button
        mode="contained"
        style={styles.button}
        onPress={onSearchButtonPress}
      >
        Check your product*
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  searchInput: {
    backgroundColor: '#0000000f',
  },
});
