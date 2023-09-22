import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { RootStackParamList } from '../types';

type Props = DrawerScreenProps<RootStackParamList, 'searchUnit'>;

type SearchUnitNavigationProp = Props['navigation']

const Home = () => {
	const navigation = useNavigation<SearchUnitNavigationProp>();

  return (
    <View style={styles.homeContainer}>
      <TextInput label="Serial no..." style={styles.searchInput} />
      <Button
        mode="contained"
        style={styles.button}
				onPress={() => {
					navigation.navigate('documentList', {unitNumber: 'B7NZ1111'})
				}}
      >
        Check your product*
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
	homeContainer: {
		paddingTop: 20,
		paddingLeft: 10,
    paddingRight: 10,
	},
  button: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
  },
  searchInput: {
    backgroundColor: '#0000000f',
  },
});
