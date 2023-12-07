import {
  CarMakeFilterWrapper,
  CarMakeFilterLabel,
  CarMakeFilterSelect,
  CarMakeFilterBaseOption,
  CarMakeFilterOption,
} from './CarMakeFilter.styled';

import makes from '../makes.json';

export const CarMakeFilter = () => {
  return (
    <CarMakeFilterWrapper>
      {' '}
      <CarMakeFilterLabel htmlFor="carBrand">Car brand</CarMakeFilterLabel>
      <CarMakeFilterSelect id="carMake" name="carMake">
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
