import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchInstructionsById } from '../store/thunks/fetchInstructions';
import { RootStackParamList } from '../types';

type Props = DrawerScreenProps<RootStackParamList, 'searchUnit'>;

type SearchUnitNavigationProp = Props['navigation'];

const Home = () => {
  const navigation = useNavigation<SearchUnitNavigationProp>();

  const dispatch = useAppDispatch();
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchButtonPress = () => {
    dispatch(fetchInstructionsById(searchInputValue))
      .then(() => {
        navigation.navigate('documentList', { unitNumber: searchInputValue });
      })
      //NOTE: createAsyncThunk will allways return a resolved promise - no catch statement is needed https://redux-toolkit.js.org/api/createAsyncThunk#unwrapping-result-actions
  };

  return (
    <View style={styles.homeContainer}>
      <TextInput
        label="Serial no..."
        value={searchInputValue}
        onChangeText={text => setSearchInputValue(text)}
        style={styles.searchInput}
        onSubmitEditing={handleSearchButtonPress}
        returnKeyType="search"
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={handleSearchButtonPress}
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
