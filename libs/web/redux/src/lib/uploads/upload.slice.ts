import { parserErrorMessage } from '@shule/web/helpers';
import { createSlice } from '@reduxjs/toolkit';
import { uploadFileAsync } from './uploads.actions';

export interface UploadsState {
  loading: boolean;
  error: string | null;
  uploads: any[];
}
const uploadFileSlice = createSlice({
  name: 'uploadFile',
  initialState: {
    loading: false,
    error: null,
    uploads: [],
  } as UploadsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFileAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.uploads = action.payload;
      })
      .addCase(uploadFileAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const uploadReducer = uploadFileSlice.reducer;
