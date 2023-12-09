import { CarMakeFilter } from 'components/CarMakeFilter/CarMakeFilter';
import { CarMileageFilter } from 'components/CarMileageFilter/CarMileageFilter';
import { CarPriceFilter } from 'components/CarPriceFilter/CarPriceFilter';
import { SearchButton } from 'components/SearchButton/SearchButton';
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../redux/carsSlice';
import closeIcon from '../../close-icon.svg';

const {
  SearchBarWrapper,
  SearchBarContainer,
  ResetFiltersButton,
  ResetFiltersImg,
} = require('./SearchBar.styled');

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
      </SearchBarWrapper>
      <ResetFiltersButton type="button" onClick={handleResetFilters}>
        <ResetFiltersImg src={closeIcon} alt={''} />
        Reset filters
      </ResetFiltersButton>
    </SearchBarContainer>
  );
};
