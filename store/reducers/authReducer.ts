import { createSlice } from '@reduxjs/toolkit';
import { instructionWithStatus } from '../../types';
import type { RootState } from '../store';
import { postLogin } from '../thunks/postLogin';

export interface AuthState {
  isAuth: boolean;
  token: string;
  isAuthLoading: boolean;
  isAuthError: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: '',
  isAuthLoading: false,
  isAuthError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuth: state => {
      state.isAuth = !state.isAuth;
    },
  },
  extraReducers: builder => {
    builder.addCase(postLogin.pending, (state, action) => {
      state.isAuthLoading = true;
      (state.isAuthError = ''), (state.isAuth = false), (state.token = '');
    }),
      builder.addCase(postLogin.fulfilled, (state, action) => {
        console.log('Auth fulfilled case fired!');
        state.isAuthLoading = false;
        state.isAuth = true;
      }),
      builder.addCase(postLogin.rejected, state => {
        console.log('Auth rejected case fired!');
        state.isAuthLoading = false;
      });
  },
});

export const selectIsAuthLoading = (state: RootState) => state.auth.isAuthLoading;

export const { toggleAuth } = authSlice.actions;

export default authSlice.reducer;
