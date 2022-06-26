import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { refreshTokenMiddleware } from '@shule/web/middlewares';
import { authReducer } from './auth';
import { institutionReducer } from './instititution';
import { blogReducer } from './blog';
import { ratingReducer } from './rating';
import { uploadReducer } from './uploads';
const reduceers = combineReducers({
  auth: authReducer,
  institution: institutionReducer,
  rating: ratingReducer,
  blog: blogReducer,
  upload: uploadReducer,
});

export const store = configureStore({
  reducer: reduceers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .prepend(refreshTokenMiddleware)
      .concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
