import styled from 'styled-components';

export const AdvertsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 29px;
  padding: 0;
  margin-top: 40px;
`;

export const AdvertsCard = styled.li`
  width: 274px;
  height: 426px;
`;

export const AdvertsImg = styled.img`
  display: block;
  width: 100%;
  height: 268px;
  object-fit: cover;
  border-radius: 12px;
`;

export const AdvertsFirstInfoBclock = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AdvertsFirstInfoTextContent = styled.p`
  margin: 0;
  color: #121417;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const AdvertsModelName = styled.span`
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;

export const AdvertsSecondInfoBclock = styled.div`
  margin-top: 8px;
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 4px;
  width: 100%;
`;

export const AdvertsSecondInfoTextContent = styled.p`
  margin: 0;
  color: rgba(18, 20, 23, 0.5);

  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;
