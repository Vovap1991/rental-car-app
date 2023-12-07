import styled from 'styled-components';

export const LearnButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
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
