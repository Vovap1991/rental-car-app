import { IoCarSportOutline } from 'react-icons/io5';
import { LogoLonk } from './Logo.styled';

export const Logo = () => {
  return (
    <div>
      <LogoLonk to="/">
        <IoCarSportOutline size={30} color="#FFFFFF" />
        <span>Rental Car Service</span>
      </LogoLonk>
    </div>
  );
};
