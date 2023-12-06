import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div>
      <h1>Welcome to the Rental Car Service</h1>
      <p>Your loyal partner to find a car for renting!</p>
      <p>Click the button below and find best car for you</p>
      <Link to="/catalog">Start</Link>
    </div>
  );
};
