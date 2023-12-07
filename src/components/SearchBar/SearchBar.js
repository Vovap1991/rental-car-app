const { SearchBarWrapper } = require('./SearchBar.styled');

export const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <div>
        {' '}
        <label htmlFor="carBrand">Car brand</label>
        <select id="carBrand" name="carBrand">
          <option value="baseBrand">Enter the text</option>
          <option value="option2"> 2</option>
          <option value="option3"> 3</option>
        </select>
      </div>

      <div>
        {' '}
        <label htmlFor="pricePerHour">Price/ 1 hour</label>
        <select id="pricePerHour" name="pricePerHour">
          <option value="basePrice">To $</option>
          <option value="optionB"> B</option>
          <option value="optionC"> C</option>
        </select>
      </div>

      <div>
        <label>Сar mileage / km</label>
        <input type="text" id="from" name="from" placeholder="From" />
        <input type="text" id="to" name="to" placeholder="To" />
      </div>
    </SearchBarWrapper>
  );
};
