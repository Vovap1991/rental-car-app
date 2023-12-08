import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';

const initialState = {
  cars: [],
  filter: {
    make: '',
    price: '',
    from: '',
    to: '',
  },
  filteredCars: [],
  favoriteCars: [],
  isModalOn: false,
  modalCar: '',
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setFilteredCars(state, action) {
      state.filteredCars = [...action.payload];
    },
    clearFilter(state, _) {
      state.filter = initialState.filter;
    },
    addFavorite(state, action) {
      const favorites = [...state.favoriteCars];

      if (favorites.indexOf(action.payload) > -1) {
        favorites.splice(favorites.indexOf(action.payload), 1);
        state.favoriteCars = [...favorites];
      } else {
        state.favoriteCars = [...state.favoriteCars, action.payload];
      }
    },
    setModal(state, action) {
      state.isModalOn = action.payload;
    },
    setModalCar(state, action) {
      state.modalCar = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(operations.fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const {
  setFilter,
  setFilteredCars,
  clearFilter,
  addFavorite,
  setActivePage,
  setModal,
  setModalCar,
} = slice.actions;
