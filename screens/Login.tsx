import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch } from '../hooks/reduxHooks';
import { fetchInstructionsById } from '../store/thunks/fetchInstructions';
import { RootStackParamList } from '../types';

// type Props = DrawerScreenProps<RootStackParamList, 'searchUnit'>;

// type SearchUnitNavigationProp = Props['navigation'];

const Login = () => {
  const [formData, setFormData] = useState<{email: string; password: string}>({email: '', password: ''});

  // const handleSearchButtonPress = () => {
  //   dispatch(fetchInstructionsById(searchInputValue));
  //   navigation.navigate('documentList', { unitNumber: searchInputValue });
  // };

  // const navigation = useNavigation<SearchUnitNavigationProp>();

  // const dispatch = useAppDispatch();

  return (
    <View style={styles.loginContainer}>
      <TextInput
        label="Email"
        // value={searchInputValue}
        // onChangeText={text => setSearchInputValue(text)}
        style={styles.searchInput}
				// onSubmitEditing={handleSearchButtonPress}
        returnKeyType="search"
				
      />
      <Button
        mode="contained"
        style={styles.button}
        // onPress={handleSearchButtonPress}
      >
        Login
      </Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
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
