import styled from 'styled-components';

export const ContactPhoneLink = styled.a`
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
