import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-top: 20px;
`;

export const ResetFiltersButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
  background-color: transparent;
  border: none;
  color: #555;
  font-size: 14px;
  cursor: pointer;
`;

export const ResetFiltersImg = styled.img`
  width: 20px;
  height: 20px;
`;
