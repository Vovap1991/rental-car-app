import {
  CarPriceFilterWrapper,
  CarPriceFilterLabel,
} from './CarPriceFilter.styled';

export const CarPriceFilter = () => {
  return (
    <CarPriceFilterWrapper>
      {' '}
      <CarPriceFilterLabel htmlFor="pricePerHour">
        Price/ 1 hour
      </CarPriceFilterLabel>
      <select id="pricePerHour" name="pricePerHour">
        <option value="basePrice">To $</option>
        <option value="optionB"> B</option>
        <option value="optionC"> C</option>
      </select>
    </CarPriceFilterWrapper>
  );
};
