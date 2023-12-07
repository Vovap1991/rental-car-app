import {
  CarMileageFilterWrapper,
  CarMileageFilterLabel,
} from './CarMileageFilter.styled';

export const CarMileageFilter = () => {
  return (
    <CarMileageFilterWrapper>
      <CarMileageFilterLabel>Сar mileage / km</CarMileageFilterLabel>
      <div>
        <input type="text" id="from" name="from" placeholder="From" />
        <input type="text" id="to" name="to" placeholder="To" />
      </div>
    </CarMileageFilterWrapper>
  );
};
