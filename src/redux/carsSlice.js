import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handleFetchCarsFulfilled = (state, action) => {
  state.cars = action.payload;
};

const initialState = {
  cars: [],
  filter: {
    make: '',
    price: '',
    from: '',
    to: '',
  },
  favoriteCars: [],
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = [...state.cars, ...action.payload];
    },
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
      const filteredCars = state.cars.filter(
        car => car.make === state.filter.make
      );
      state.cars = [...filteredCars];
    },

    clearFilter(state, { dispatch }) {
      state.filter = initialState.filter;
    },
    addFavorite(state, action) {
      const carId = action.payload;
      const isFavorite = state.favoriteCars.includes(carId);

      if (isFavorite) {
        state.favoriteCars = state.favoriteCars.filter(id => id !== carId);
      } else {
        state.favoriteCars.push(carId);
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCars.fulfilled, handleFetchCarsFulfilled);
  },
});

export const { setCars, setFilter, setFilteredCars, clearFilter, addFavorite } =
  slice.actions;
