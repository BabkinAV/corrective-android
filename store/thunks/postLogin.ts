import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { loginResponse } from '../../types';

export const postLogin = createAsyncThunk<
  loginResponse,
  { email: string; password: string }
>('auth/login', ({ email, password }) => {
  return axios
    .post<loginResponse>(
      'https://wide-eyed-attire-mite.cyclic.app/auth/login',
      { email, password }
    )
    .then(response => {
      return response.data;
    });
});

// TODO: implement rejection logic
