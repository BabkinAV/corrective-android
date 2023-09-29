import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { loginResponse } from '../../types/apiResponseTypes';

export const postLogin = createAsyncThunk<
  loginResponse,
  { email: string; password: string },
  { rejectValue: string }
>('auth/login', ({ email, password }, { rejectWithValue }) => {
  return axios
    .post<loginResponse>(
      'https://wide-eyed-attire-mite.cyclic.app/auth/login',
      { email, password }
    )
    .then(response => {
      return response.data;
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
