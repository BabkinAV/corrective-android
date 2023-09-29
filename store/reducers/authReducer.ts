import { createSlice } from '@reduxjs/toolkit';
import { instructionWithStatus } from '../../types/dataTypes';
import type { RootState } from '../store';
import { postLogin } from '../thunks/postLogin';

export interface AuthState {
  isAuth: boolean;
  token: string;
  isAuthLoading: boolean;
  authError: string;
}

const initialState: AuthState = {
  isAuth: false,
  token: '',
  isAuthLoading: false,
  authError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetAuth: state => {
      console.log('fired reset state!');
      state.isAuth = false;
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(postLogin.pending, (state, action) => {
      state.isAuthLoading = true;
      state.authError = '';
      state.isAuth = false;
      state.token = '';
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      console.log('Auth fulfilled case fired!');
      state.isAuthLoading = false;
      state.isAuth = true;
      state.token = action.payload.token;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      console.log('Auth rejected case fired!');
      state.isAuthLoading = false;
      state.authError = action.payload ?? 'Failed to authenticate';
    });
  },
});

export const selectIsAuthLoading = (state: RootState) =>
  state.auth.isAuthLoading;

export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;


export const { resetAuth } = authSlice.actions;

export default authSlice.reducer;
