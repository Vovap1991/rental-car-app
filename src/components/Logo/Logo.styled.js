import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoLonk = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 20px;
  font-weight: 700;
  color: #ffffff;

  padding: 6px;
`;
