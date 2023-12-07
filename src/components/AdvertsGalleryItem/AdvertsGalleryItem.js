import { LearnMoreButton } from 'components/LearnMoreButton/LearnMoreButton';
import { fetchAdverts } from 'components/services/services';
import { useState, useEffect } from 'react';
import {
  AdvertsContainer,
  AdvertsList,
  AdvertsCard,
  AdvertsImg,
  AdvertsFirstInfoBclock,
  AdvertsFirstInfoTextContent,
  AdvertsModelName,
  AdvertsSecondInfoBclock,
  AdvertsSecondInfoTextContent,
} from './AdvertsGalleryItem.styled';

export const AdvertsGalleryItem = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const getAdverts = async () => {
      const adverts = await fetchAdverts();
      setAdverts(adverts);
    };
    getAdverts();
  }, []);

  return (
    <AdvertsContainer>
      <AdvertsList>
        {adverts.map(advert => (
          <AdvertsCard key={advert.id}>
            <AdvertsImg src={advert.img} alt={advert.make} />
            <AdvertsFirstInfoBclock>
              <AdvertsFirstInfoTextContent>
                {advert.make}{' '}
                <AdvertsModelName>{advert.model}</AdvertsModelName>,{' '}
                {advert.year}
              </AdvertsFirstInfoTextContent>
              <span>{advert.rentalPrice}</span>
            </AdvertsFirstInfoBclock>
            <AdvertsSecondInfoBclock>
              <AdvertsSecondInfoTextContent>
                {advert.address.split(',').slice(-2).join(' | ')} |{' '}
                {advert.rentalCompany}
              </AdvertsSecondInfoTextContent>
              <AdvertsSecondInfoTextContent>
                {advert.type} | {advert.model} | {advert.id} |{' '}
                {advert.functionalities[0].split(' ').slice(0, 1).join(' ')}
                {advert.functionalities[0].split(' ').length > 1 ? '...' : ''}
              </AdvertsSecondInfoTextContent>
            </AdvertsSecondInfoBclock>
            <LearnMoreButton />
          </AdvertsCard>
        ))}
      </AdvertsList>
    </AdvertsContainer>
  );
};
