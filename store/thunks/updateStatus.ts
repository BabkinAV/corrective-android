import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateStatusResponse } from '../../types/apiResponseTypes';
import { instructionStatus } from '../../types/dataTypes';
import { RootState } from '../store';

// NOTE: Rework into update status thunk according to https://github.com/BabkinAV/Corrective/blob/master/src/redux/actions/dataActions.js#L68-L78

export const updateStatus = createAsyncThunk<
  updateStatusResponse,
  { unitNumber: string; newStatus: instructionStatus },
  { rejectValue: string; state: RootState }
>(
  'documents/updateStatus',
  ({ unitNumber, newStatus }, { rejectWithValue, getState }) => {
    if (unitNumber === '') {
      return rejectWithValue('Could not find unit');
    }
    const state = getState();
    const token = state.auth.token;
    const arrayForUpdate = state.documents.selectedDocumentIds.map(el => {
      return { docId: el, status: newStatus };
    });

    return axios
      .put<updateStatusResponse>(
        process.env.EXPO_PUBLIC_API_URL + '/unit/updatestatus/' + unitNumber,
        arrayForUpdate,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      .then(response => response.data)
      .catch(error => {
        if (
          axios.isAxiosError<{ message?: string }>(error) &&
          error.response?.data.message
        ) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue('Failed to update status');
        }
      });
  }
);
