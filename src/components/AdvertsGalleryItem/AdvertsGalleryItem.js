import { LearnMoreButton } from 'components/LearnMoreButton/LearnMoreButton';
import { defaultImg } from 'components/services/services';
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
  FavoriteButton,
} from './AdvertsGalleryItem.styled';

import normalHeart from '../../normal.svg';
import { fetchAdverts } from 'api';

export const AdvertsGalleryItem = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  // const [loading, setloading] = useState(false);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const getAdverts = async () => {
      const adverts = await fetchAdverts(page, limit);
      setAdverts(adverts);
      console.log(adverts);
    };
    getAdverts();
  }, []);

  return (
    <AdvertsContainer>
      <AdvertsList>
        {adverts.map(advert => (
          <AdvertsCard key={advert.id}>
            <FavoriteButton>
              <img src={normalHeart} alt="" />
            </FavoriteButton>

            <AdvertsImg src={advert.img || defaultImg} alt={advert.make} />
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
