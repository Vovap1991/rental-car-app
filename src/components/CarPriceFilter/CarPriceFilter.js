import {
  CarPriceFilterWrapper,
  CarPriceFilterLabel,
  CarPriceFilterSelect,
} from './CarPriceFilter.styled';

export const CarPriceFilter = () => {
  const createOptions = () => {
    const options = [];

    for (let price = 10; price < 500; price += 10) {
      options.push(
        <option key={price} value={price}>
          {price} $
        </option>
      );
    }

    return options;
  };

  return (
    <CarPriceFilterWrapper>
      <CarPriceFilterLabel htmlFor="pricePerHour">
        Price/ 1 hour
      </CarPriceFilterLabel>
      <CarPriceFilterSelect id="pricePerHour" name="pricePerHour">
        <option key="empty" value="">
          To $
        </option>
        {createOptions()}
      </CarPriceFilterSelect>
    </CarPriceFilterWrapper>
  );
};
