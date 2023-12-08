import { configureStore } from '@reduxjs/toolkit';
import { slice } from './carsSlice';

export const store = configureStore({
  reducer: {
    cars: slice.reducer,
  },
});
