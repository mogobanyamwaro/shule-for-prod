import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../wrapper';
import { AuthService } from './auth.service';
import { ILoginInput, IRegisterInput } from './auth.service';

export const register = createAsyncThunk(
  'auth/register',
  async (input: IRegisterInput, thunkApi) => {
    try {
      const response = await AuthService.register(input);
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

export const login = createAsyncThunk(
  'auth/login',
  async (input: ILoginInput, thunkApi) => {
    try {
      const data = await AuthService.login(input);
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
