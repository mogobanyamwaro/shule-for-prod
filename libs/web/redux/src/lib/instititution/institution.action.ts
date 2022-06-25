import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../wrapper';
import {
  getAllInstitutions,
  createInstitutionProfile,
  InstitutionInterface,
  getOneInstitution,
} from './institution.service';

export const createInstitutionProfileAsync = createAsyncThunk(
  'institution/createInstitutionProfile',
  async (input: InstitutionInterface, thunkApi) => {
    try {
      const response = await createInstitutionProfile(input);
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

export const getAllInstitutionsAsync = createAsyncThunk(
  'institution/getAllInstitutions',
  async (_, thunkApi) => {
    try {
      const response = await getAllInstitutions();
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

export const getOneInstitutionsAsync = createAsyncThunk(
  'institution/getOneInstitutions',
  async (id: string, thunkApi) => {
    try {
      const response = await getOneInstitution(id);
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
