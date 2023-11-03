import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
  createListenerMiddleware,
  addListener,
  TypedAddListener,
} from '@reduxjs/toolkit';
import { api } from '../gql';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';

const combinedReducer = combineReducers({
  [api.reducerPath]: api.reducer,
});

export const listenerMiddleware = createListenerMiddleware();

export const makeStore = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .prepend(listenerMiddleware.middleware)
        .concat([api.middleware]);
    },
  });
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const addAppListener = addListener as TypedAddListener<
  RootState,
  AppDispatch
>;
export type RootState = ReturnType<AppStore['getState']>;
export type TAppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env['NODE_ENV'] === 'production' ? false : true,
});
