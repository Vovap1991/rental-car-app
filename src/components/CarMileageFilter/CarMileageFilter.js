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
          type="text"
          id="from"
          name="from"
          placeholder="From"
        />
        <CarMileageFilterToInput
          type="text"
          id="to"
          name="to"
          placeholder="To"
        />
      </CarMileageFilterInputsWrapper>
    </CarMileageFilterWrapper>
  );
};
