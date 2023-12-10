import { useDispatch } from 'react-redux';

import { CarMakeFilter } from 'components/CarMakeFilter/CarMakeFilter';
import { CarMileageFilter } from 'components/CarMileageFilter/CarMileageFilter';
import { CarPriceFilter } from 'components/CarPriceFilter/CarPriceFilter';
import { SearchButton } from 'components/SearchButton/SearchButton';

import { clearFilter } from '../../redux/carsSlice';

import closeIcon from '../../close-icon.svg';

import {
  SearchBarWrapper,
  SearchBarContainer,
  ResetFiltersButton,
  ResetFiltersImg,
} from './SearchBar.styled';

export const SearchBar = () => {
  const dispatch = useDispatch();

  const handleResetFilters = () => {
    dispatch(clearFilter());
  };

  return (
    <SearchBarContainer>
      <SearchBarWrapper>
        <CarMakeFilter />
        <CarPriceFilter />
        <CarMileageFilter />
        <SearchButton />
        <ResetFiltersButton type="button" onClick={handleResetFilters}>
          <ResetFiltersImg src={closeIcon} alt={''} />
          Reset filters
        </ResetFiltersButton>
      </SearchBarWrapper>
    </SearchBarContainer>
  );
};
