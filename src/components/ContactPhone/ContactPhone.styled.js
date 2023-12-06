import styled from 'styled-components';

export const ContactPhoneLink = styled.a`
  text-decoration: none;

  font-size: 17px;
  font-weight: 700;
  color: #808080;

  padding: 6px;

  transition: color 200ms linear, font-size 200ms linear,
    box-shadow 200ms linear;

  &:hover {
    color: #696969;
    font-size: 20px;
  }
`;
