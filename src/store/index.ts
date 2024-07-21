import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import backpackReducer from './slices/backpackSlice';

export const store = configureStore({
  reducer: {
    backpack: backpackReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
