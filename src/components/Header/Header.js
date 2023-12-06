import { ContactPhone } from 'components/ContactPhone/ContactPhone';
import {
  HeaderContainer,
  HeaderNavList,
  HeaderNavListLink,
} from './Headers.styled';

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <HeaderNavList>
          <li>
            <HeaderNavListLink to="/">Home Page</HeaderNavListLink>
          </li>
          <li>
            <HeaderNavListLink to="/catalog">Catalog</HeaderNavListLink>
          </li>
          <li>
            <HeaderNavListLink to="/favorites">Favorites</HeaderNavListLink>
          </li>
        </HeaderNavList>
      </nav>
      <ContactPhone />
    </HeaderContainer>
  );
};
