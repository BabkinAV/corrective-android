import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { instructionWithStatus } from '../../types/dataTypes';
import type { RootState } from '../store';
import { fetchInstructionsById } from '../thunks/fetchInstructions';
import { updateStatus } from '../thunks/updateStatus';

// Define a type for the slice state
export interface documentState {
  documentsArray: instructionWithStatus[];
  errorFetchingDocuments: string;
  isDataLoading: boolean;
  selectedDocumentIds: string[];
}

// Define the initial state using that type
const initialState: documentState = {
  documentsArray: [],
  errorFetchingDocuments: '',
  isDataLoading: false,
  selectedDocumentIds: [],
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
    removeDocumentFromSelected: (state, action: PayloadAction<string>) => {
      state.selectedDocumentIds = state.selectedDocumentIds.filter(
        el => el !== action.payload
      );
    },
    addDocumentToSelected: (state, action: PayloadAction<string>) => {
      state.selectedDocumentIds.push(action.payload);
    },
    resetSelected: state => {
      state.selectedDocumentIds = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchInstructionsById.pending, (state, action) => {
      state.documentsArray = [];
      state.errorFetchingDocuments = '';
      state.isDataLoading = true;
    });
    builder.addCase(fetchInstructionsById.fulfilled, (state, action) => {
      state.isDataLoading = false;
      if (action.payload.unit) {
        state.documentsArray = action.payload.unit.instructions;
      } else {
        state.errorFetchingDocuments = 'No unit has been found';
      }
    });
    builder.addCase(fetchInstructionsById.rejected, (state, action) => {
      state.isDataLoading = false;
      state.errorFetchingDocuments =
        action.payload ?? 'Failed fetching documents';
    });
		builder.addCase(updateStatus.pending, (state, action) => {
			state.isDataLoading = true;
		})
		builder.addCase(updateStatus.fulfilled, (state, action) => {
			console.log('Update succesfull! New statuses: ', action.payload);
			state.selectedDocumentIds = [];
			state.isDataLoading = false;
		})
		builder.addCase(updateStatus.rejected, (state, action) => {
			state.isDataLoading = false;
		})
  },
});

// export const { increment, decrement, incrementByAmount } = documentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectDocuments = (state: RootState) =>
  state.documents.documentsArray;
export const selectErrorFetching = (state: RootState) =>
  state.documents.errorFetchingDocuments;
export const selectIsDataLoading = (state: RootState) =>
  state.documents.isDataLoading;
export const selectSelectedDocumentIds = (state: RootState) =>
  state.documents.selectedDocumentIds;

export const selectSelectedDocumentIdsLength = (state: RootState) =>
  state.documents.selectedDocumentIds.length;

export const { addDocumentToSelected, removeDocumentFromSelected, resetSelected } =
  documentsSlice.actions;

export default documentsSlice.reducer;
