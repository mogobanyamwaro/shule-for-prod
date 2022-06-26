import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../wrapper';
import { uploadsService } from './uploads.service';

export const uploadFileAsync = createAsyncThunk(
  'user/uploadFile',
  async (images: any, thunkApi) => {
    try {
      const data = await uploadsService.uploadFile(images);
      return data;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage(message));
      return thunkApi.rejectWithValue(message);
    }
  }
);
