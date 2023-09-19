import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button,  TextInput } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const Home = () => {
	const theme = useTheme();
  return (
    <>
      <StatusBar style="light" />
      <Appbar.Header style={{backgroundColor: '#512da8'}} dark  mode='center-aligned'>
        <Appbar.Content title="Corrective"/>
      </Appbar.Header>
      <View style={styles.container}>
				<TextInput label="Serial no..."/>
				<Button mode='contained' style={styles.button}>Check your product*</Button>

      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 20,
  },
	button: {
		marginTop: 15,
		paddingTop: 5,
		paddingBottom: 5,
	},
	searchInput: {} 
});
