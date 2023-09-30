import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Modal, Portal, Text, TextInput } from 'react-native-paper';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { fetchInstructionsById } from '../../store/thunks/fetchInstructions';
import { RootStackParamList } from '../../types/routerTypes';

type Props = DrawerScreenProps<RootStackParamList, 'searchUnit'>;

type SearchUnitNavigationProp = Props['navigation'];

const Home = () => {
  const navigation = useNavigation<SearchUnitNavigationProp>();

  const dispatch = useAppDispatch();
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  const handleSearchButtonPress = () => {
    dispatch(fetchInstructionsById(searchInputValue));
    navigation.navigate('documentList', { unitNumber: searchInputValue });
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
