import { createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from '../wrapper';
import { createBlog, BlogInterface, getBlogs, getBlog } from './blog.service';

export const createBlogAsync = createAsyncThunk(
  'blog/createBlog',
  async (input: BlogInterface, thunkApi) => {
    try {
      const response = await createBlog(input);
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

export const getBlogsAsync = createAsyncThunk(
  'blog/getBlogs',
  async (_, thunkApi) => {
    try {
      const response = await getBlogs();
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

export const getBlogAsync = createAsyncThunk(
  'blog/getBlog',
  async (id: string, thunkApi) => {
    try {
      const response = await getBlog(id);
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
