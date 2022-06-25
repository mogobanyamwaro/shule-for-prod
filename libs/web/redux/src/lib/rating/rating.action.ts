import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../wrapper';
import {
  createRating,
  RatingInterface,
  getInstitutionRatings,
} from './rating.service';

export const createRatingAsync = createAsyncThunk(
  'rating/createRating',
  async (input: RatingInterface, thunkApi) => {
    try {
      const response = await createRating(input);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage({ message }));
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getInstitutionRatingsAsync = createAsyncThunk(
  'rating/getInstitutionRatings',
  async (institutionId: string, thunkApi) => {
    try {
      const response = await getInstitutionRatings(institutionId);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkApi.dispatch(setMessage({ message }));
      return thunkApi.rejectWithValue(message);
    }
  }
);
