import styled from 'styled-components';

export const CarPriceFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CarPriceFilterLabel = styled.label`
  color: #8a8a89;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const CarPriceFilterSelect = styled.select`
  border: none;
  display: flex;
  width: 125px;
  padding: 14px 18px;
  align-items: flex-start;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;
