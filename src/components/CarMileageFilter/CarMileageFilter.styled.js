import styled from 'styled-components';

export const CarMileageFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CarMileageFilterLabel = styled.label`
  color: #8a8a89;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;

export const CarMileageFilterInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CarMileageFilterFromInput = styled.input`
  border: none;
  width: 160px;
  padding: 14px 93px 14px 24px;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  color: #121417;
  background: #f7f7fb;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;

export const CarMileageFilterToInput = styled.input`
  border: none;
  display: flex;
  width: 160px;
  padding: 14px 115px 14px 24px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;
  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
`;
