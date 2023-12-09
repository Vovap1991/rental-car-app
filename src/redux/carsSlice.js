import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const handleFetchCarsFulfilled = (state, action) => {
  state.cars = action.payload;
  state.initialCars = action.payload;
};

const initialState = {
  cars: [],
  initialCars: [],
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
      state.initialCars = [...state.cars, ...action.payload];
    },
    setFilter(state, action) {
      state.filter = { ...state.filter, ...action.payload };
      if (state.filter.make === 'Enter the text') {
        state.filter.make = '';
        state.initialCars = state.cars;
      }
      const filteredCars = state.cars.filter(
        car => car.make === state.filter.make
      );
      state.cars = [...filteredCars];
    },
    clearFilter(state, _) {
      state.filter = initialState.filter;
      state.cars = [...state.initialCars];
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
