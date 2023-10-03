import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { affectedUnitResponse } from '../../types/apiResponseTypes';

export const fetchInstructionsById = createAsyncThunk<
  affectedUnitResponse,
  string,
  { rejectValue: string }
>('users/fetchByIdStatus', (unitNumber: string, { rejectWithValue }) => {
	if (unitNumber === '') {
		return rejectWithValue('Could not find unit')
	}
  return axios
    .get<affectedUnitResponse>(process.env.EXPO_PUBLIC_API_URL + '/unit/' + unitNumber)
    .then(response => response.data)
    .catch(error => {
      if (
        axios.isAxiosError<{ message?: string }>(error) &&
        error.response?.data.message
      ) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue('Failed to fetch unit');
      }

    });
});
