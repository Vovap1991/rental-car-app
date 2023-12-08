import styled from 'styled-components';

export const AdvertsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 29px;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const AdvertsCard = styled.li`
  position: relative;
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

export const FavoriteButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 14px;
  left: 230px;
  background-color: transparent;
  border: none;
  outline: none;
  width: 18px;
  height: 18px;
`;

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

export const LoadMoreButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  margin-bottom: 150px;
  background-color: transparent;
  color: #3470ff;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
`;
