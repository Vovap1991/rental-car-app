import {
  HeroContainer,
  HeroTextContainer,
  HeroTitle,
  HeroParagraphPartner,
  HeroParagraphClick,
  HeroButton,
} from './Hero.styled';

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextContainer>
        <HeroTitle>Welcome to the Rental Car Service</HeroTitle>
        <HeroParagraphPartner>
          Your loyal partner for renting cars!
        </HeroParagraphPartner>
        <HeroParagraphClick>
          Click the button below and find the best car for you
        </HeroParagraphClick>
        <HeroButton to="/catalog"> Find Car</HeroButton>
      </HeroTextContainer>
    </HeroContainer>
  );
};
