import { DrawerScreenProps } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { postLogin } from '../store/thunks/postLogin';
import { RootStackParamList } from '../types';
import { selectIsAuthLoading } from '../store/reducers/authReducer';

type Props = DrawerScreenProps<RootStackParamList, 'login'>;

type SearchUnitNavigationProp = Props['navigation'];

const Login = () => {
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    { email: '', password: '' }
  );

	const isAuthLoading = useAppSelector(selectIsAuthLoading);

  const handleChange = (text: string, name: 'email' | 'password') => {
    setFormData(prevFormData => ({ ...prevFormData, [name]: text }));
  };

  const handleLoginButtonPress = () => {
    dispatch(postLogin({ email: formData.email, password: formData.password }))
      .unwrap()
      .then(() => {
        navigation.navigate('searchUnit');
      })
      .catch(err => console.log(err));
  };

  const navigation = useNavigation<SearchUnitNavigationProp>();

  const dispatch = useAppDispatch();

  return (
    <View style={styles.loginContainer}>
      <TextInput
        label="Email"
        value={formData.email}
        mode="outlined"
        onChangeText={text => handleChange(text, 'email')}
        style={styles.emailInput}
      />
      <TextInput
        label="Password"
        mode="outlined"
        value={formData.password}
        onChangeText={text => handleChange(text, 'password')}
        style={styles.passwordInput}
      />
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          style={styles.button}
          onPress={handleLoginButtonPress}
					loading={isAuthLoading}
					disabled={isAuthLoading}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    paddingTop: 30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  button: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    maxWidth: 100,
  },
  // searchInput: {
  //   backgroundColor: '#0000000f',
  // },
  emailInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  passwordInput: {
    backgroundColor: 'transparent',
    marginBottom: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
});
