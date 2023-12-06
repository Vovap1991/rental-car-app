import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
  position: relative;
  background: url(${process.env.PUBLIC_URL}/hero-bg.jpeg) center/cover no-repeat;
  width: 100%;
  height: calc(100vh - 75px);
  display: flex;
  flex-direction: column;
`;

export const HeroTextContainer = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h1`
  font-size: 55px;
  margin: 0;
  margin-bottom: 10px;
`;

export const HeroParagraphPartner = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 60px;
`;

export const HeroParagraphClick = styled.p`
  width: 550px;
  font-size: 30px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 50px;
`;

export const HeroButton = styled(Link)`
  text-decoration: none;
  outline: none;
  width: 274px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #fff;
  color: #000;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.1;

  transition: color 200ms linear, box-shadow 200ms linear,
    background-color 200ms linear, border-radius 200ms linear;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #3470ff;
  }
`;
