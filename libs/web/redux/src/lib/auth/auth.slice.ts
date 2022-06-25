import { parserErrorMessage } from '@shule/web/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { login, register } from './auth.actions';

interface ID {
  accessToken: string;
}
export interface AuthState {
  _id: ID | null;
  loading: boolean;
  error: string | null;
  sucess: boolean;
}

const initialState: AuthState = {
  _id: null,
  loading: false,
  error: '',
  sucess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state: any, action: PayloadAction<ID>) => {
      state._id = action.payload;
    },
    unsetToken: (state: any) => {
      state._id = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
        state._id = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(register.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.sucess = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const { setToken, unsetToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
