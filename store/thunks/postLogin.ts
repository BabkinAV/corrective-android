import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginResponse } from '../../types/apiResponseTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const postLogin = createAsyncThunk<
  loginResponse,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', ({ email, password }, { rejectWithValue }) => {
	let responseData: loginResponse;
  return axios
    .post<loginResponse>(
			process.env.EXPO_PUBLIC_API_URL +  '/auth/login',
      { email, password }
    )
    .then(response => {
			responseData = response.data;
			return AsyncStorage.setItem('token', response.data.token);
    })
		.then(() => {
			return responseData
		})
    .catch(error => {
      if (
        axios.isAxiosError<{ message?: string }>(error) &&
        error.response?.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue('Failed to login');
      }
    });
});
