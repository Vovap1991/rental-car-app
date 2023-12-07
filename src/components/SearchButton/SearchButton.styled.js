import styled from 'styled-components';

export const SearchButtonStyled = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  width: 136px;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: #3470ff;
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #0b44cd;
  }
`;
