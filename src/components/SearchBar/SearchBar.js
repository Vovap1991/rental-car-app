import { CarMakeFilter } from 'components/CarMakeFilter/CarMakeFilter';
import { CarMileageFilter } from 'components/CarMileageFilter/CarMileageFilter';
import { CarPriceFilter } from 'components/CarPriceFilter/CarPriceFilter';

const { SearchBarWrapper } = require('./SearchBar.styled');

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <CarMakeFilter />
      <CarPriceFilter />
      <CarMileageFilter />
    </SearchBarWrapper>
  );
};
