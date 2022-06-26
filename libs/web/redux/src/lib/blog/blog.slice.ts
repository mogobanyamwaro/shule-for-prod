import { parserErrorMessage } from '@shule/web/helpers';
import { createSlice } from '@reduxjs/toolkit';
import { createBlogAsync, getBlogsAsync, getBlogAsync } from './blog.actions';
import { BlogInterface } from './blog.service';

interface IgetBlog extends BlogInterface {
  id: string;
}

export interface BlogState {
  loading: boolean;
  error: string | null;
  blog: IgetBlog;
  blogs: IgetBlog[];
}

const initialState: BlogState = {
  loading: false,
  error: null,
  blog: {
    id: '',
    title: '',
    content: '',
    image: '',
  },

  blogs: [
    {
      id: '',
      title: '',
      content: '',
      image: '',
    },
  ],
};

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBlogAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBlogAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blog = action.payload;
      })
      .addCase(createBlogAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getBlogsAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blogs = action.payload;
      })
      .addCase(getBlogsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      })
      .addCase(getBlogAsync.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.blog = action.payload;
      })
      .addCase(getBlogAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = parserErrorMessage(action.error);
      });
  },
});

export const blogReducer = blogSlice.reducer;
