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
`;

export const AdvertsFirstInfoBclock = styled.div`
  margin-top: 14px;
`;

export const AdvertsMakeName = styled.span`
  color: #121417;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
`;
