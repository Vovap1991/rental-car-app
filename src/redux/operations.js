import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c900147af3fd22f67cb8d.mockapi.io';

export const fetchCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const response = await axios.get('/adverts');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error in fetchCars:', error.message);
    throw error;
  }
});
