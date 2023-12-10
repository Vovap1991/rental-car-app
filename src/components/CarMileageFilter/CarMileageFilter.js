import {
  CarMileageFilterWrapper,
  CarMileageFilterLabel,
  CarMileageFilterFromInput,
  CarMileageFilterToInput,
  CarMileageFilterInputsWrapper,
} from './CarMileageFilter.styled';

export const CarMileageFilter = () => {
  return (
    <CarMileageFilterWrapper>
      <CarMileageFilterLabel>Сar mileage / km</CarMileageFilterLabel>
      <CarMileageFilterInputsWrapper>
        <CarMileageFilterFromInput
          type="number"
          id="from"
          name="from"
          placeholder="From"
          aria-label="Enter From Mileage"
        />
        <CarMileageFilterToInput
          type="number"
          id="to"
          name="to"
          placeholder="To"
          aria-label="Enter to Mileage"
        />
      </CarMileageFilterInputsWrapper>
    </CarMileageFilterWrapper>
  );
};
