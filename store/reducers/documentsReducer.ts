import { createSlice } from '@reduxjs/toolkit';
import { instructionWithStatus } from '../../types';
import type { RootState } from '../store';
import { fetchInstructionsById } from '../thunks/fetchInstructions';

// Define a type for the slice state
export interface documentState {
  documentsArray: instructionWithStatus[];
  errorFetchingDocuments: string;
  isFetchingDocuments: boolean;
}

// Define the initial state using that type
const initialState: documentState = {
  documentsArray: [],
  errorFetchingDocuments: '',
  isFetchingDocuments: false,
};

export const documentsSlice = createSlice({
  name: 'documents',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // increment: state => {
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  },
  extraReducers: builder => {
    builder.addCase(fetchInstructionsById.pending, (state, action) => {
      state.documentsArray = [];
      state.errorFetchingDocuments = '';
			state.isFetchingDocuments = true;
    });
    builder.addCase(fetchInstructionsById.fulfilled, (state, action) => {
			state.isFetchingDocuments = false;
      if (action.payload.unit) {
        state.documentsArray = action.payload.unit.instructions;
      } else {
        state.errorFetchingDocuments = 'No unit has been found';
      }
    });
    builder.addCase(fetchInstructionsById.rejected, (state, action) => {
			state.isFetchingDocuments = false;
			state.errorFetchingDocuments = action.payload ?? 'Failed fetching documents'
		});
  },
});

// export const { increment, decrement, incrementByAmount } = documentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDocuments = (state: RootState) =>
  state.documents.documentsArray;
export const selectErrorFetching = (state: RootState) =>
  state.documents.errorFetchingDocuments;
export const selectIsDataLoading = (state: RootState) =>
  state.documents.isFetchingDocuments;

export default documentsSlice.reducer;
