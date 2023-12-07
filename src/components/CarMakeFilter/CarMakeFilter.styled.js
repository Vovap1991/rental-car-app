import styled from 'styled-components';

export const CarMakeFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CarMakeFilterLabel = styled.label`
  color: #8a8a89;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const CarMakeFilterSelect = styled.select`
  display: flex;
  font-family: 'Manrope';
  padding: 14px 89px 14px 18px;
  justify-content: center;
  align-items: center;
  gap: 32px;
  border-radius: 14px;
  background: #f7f7fb;
  font-size: 18px;
  color: #121417;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;

export const CarMakeFilterOption = styled.option`
  color: rgba(18, 20, 23, 0.2);
  font-family: 'Manrope';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;
