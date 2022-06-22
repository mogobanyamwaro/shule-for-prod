import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { refreshTokenMiddleware } from '@shule/web/middlewares';
const reduceers = combineReducers({});

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
