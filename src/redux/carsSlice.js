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
  filteredCars: [],
  favoriteCars: [],
  isModalOn: false,
  modalCar: '',
};

export const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCars(state, action) {
      state.cars = action.payload;
    },
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
    builder.addCase(fetchCars.fulfilled, handleFetchCarsFulfilled);
  },
});

export const {
  setCars,
  setFilter,
  setFilteredCars,
  clearFilter,
  addFavorite,
  setModal,
  setModalCar,
} = slice.actions;
