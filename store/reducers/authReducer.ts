import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { postLogin } from '../thunks/postLogin';
import type { PayloadAction } from '@reduxjs/toolkit'

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
      state.isAuth = false;
      state.token = '';
    },
		setAuth: (state, action: PayloadAction<string>) => {
			state.isAuth = true;
			state.token = action.payload;
		}
  },
  extraReducers: builder => {
    builder.addCase(postLogin.pending, (state, action) => {
      state.isAuthLoading = true;
      state.authError = '';
      state.isAuth = false;
      state.token = '';
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.isAuthLoading = false;
      state.isAuth = true;
      state.token = action.payload.token;
    });
    builder.addCase(postLogin.rejected, (state, action) => {
      state.isAuthLoading = false;
      state.authError = action.payload ?? 'Failed to authenticate';
    });
  },
});

export const selectIsAuthLoading = (state: RootState) =>
  state.auth.isAuthLoading;

export const selectAuthError = (state: RootState) => state.auth.authError;
export const selectIsAuth = (state: RootState) => state.auth.isAuth;
export const selectToken = (state: RootState) => state.auth.token;



export const { resetAuth, setAuth } = authSlice.actions;

export default authSlice.reducer;
