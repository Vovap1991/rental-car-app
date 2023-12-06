import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 25px;
  background-color: #3470ff;
`;

export const HeaderNavList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  gap: 40px;
  padding: 0;
`;

export const HeaderNavListLink = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;

  padding: 6px;

  transition: color 200ms linear, box-shadow 200ms linear,
    background-color 200ms linear, border-radius 200ms linear;

  &:hover, &: focus {
    color: #121417;
    box-shadow: rgba(0, 0, 0, 0.75) 3px 4px 8px -1px;
    border-radius: 4px;
    background-color: #ffffff;
    border-radius: 15px;
  }
`;
