import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://650c900147af3fd22f67cb8d.mockapi.io/adverts';

const fetchCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const response = await axios.get('/advert');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error in fetchCars:', error.message);
    throw error;
  }
});

const operations = {
  fetchCars,
};

export default operations;
