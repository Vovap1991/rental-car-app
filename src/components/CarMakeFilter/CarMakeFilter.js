import { useDispatch } from 'react-redux';

import { setFilter } from '../../redux/carsSlice';

import makes from '../makes.json';

import {
  CarMakeFilterWrapper,
  CarMakeFilterLabel,
  CarMakeFilterSelect,
  CarMakeFilterBaseOption,
  CarMakeFilterOption,
} from './CarMakeFilter.styled';

export const CarMakeFilter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = selectedMake => {
    dispatch(setFilter({ make: selectedMake }));
  };

  return (
    <CarMakeFilterWrapper>
      <CarMakeFilterLabel htmlFor="carMake">Car brand</CarMakeFilterLabel>
      <CarMakeFilterSelect
        id="carMake"
        name="carMake"
        onChange={event => handleFilterChange(event.target.value)}
      >
        <CarMakeFilterBaseOption value="">
          Enter the text
        </CarMakeFilterBaseOption>
        {makes.map((make, index) => (
          <CarMakeFilterOption key={index} value={make}>
            {make}
          </CarMakeFilterOption>
        ))}
      </CarMakeFilterSelect>
    </CarMakeFilterWrapper>
  );
};
