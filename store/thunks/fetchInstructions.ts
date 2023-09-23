import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { affectedUnitResponse } from '../../types';

export const fetchInstructionsById = createAsyncThunk<affectedUnitResponse, string>(
  'users/fetchByIdStatus',
  async (unitNumber: string) => {
    const response = await axios.get(
      process.env.EXPO_PUBLIC_API_URL + '/unit/' + unitNumber
    );
    return response.data;
  }
);

