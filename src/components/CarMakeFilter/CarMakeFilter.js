import {
  CarMakeFilterWrapper,
  CarMakeFilterLabel,
  CarMakeFilterSelect,
  CarMakeFilterOption,
} from './CarMakeFilter.styled';

export const CarMakeFilter = () => {
  return (
    <CarMakeFilterWrapper>
      {' '}
      <CarMakeFilterLabel htmlFor="carBrand">Car brand</CarMakeFilterLabel>
      <CarMakeFilterSelect id="carBrand" name="carBrand">
        <CarMakeFilterOption value="baseBrand">
          Enter the text
        </CarMakeFilterOption>
        <CarMakeFilterOption value="option2"> 2</CarMakeFilterOption>
        <CarMakeFilterOption value="option3"> 3</CarMakeFilterOption>
      </CarMakeFilterSelect>
    </CarMakeFilterWrapper>
  );
};
