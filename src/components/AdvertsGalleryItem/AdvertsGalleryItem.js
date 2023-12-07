import { fetchAdverts } from 'components/services/services';
import { useState, useEffect } from 'react';
import {
  AdvertsContainer,
  AdvertsList,
  AdvertsCard,
  AdvertsImg,
  AdvertsFirstInfoBclock,
  AdvertsMakeName,
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
              <AdvertsMakeName>{advert.make}</AdvertsMakeName>
              <span>{advert.model}</span>,<span>{advert.year}</span>
              <span>{advert.rentalPrice}</span>
            </AdvertsFirstInfoBclock>
            <div>
              <p>
                {advert.address.split(',').slice(-2).join(' | ')} |{' '}
                {advert.rentalCompany}
              </p>
              <p>
                {advert.type} | {advert.model} | {advert.id} |{' '}
                {advert.functionalities[0].split(' ').slice(0, 1).join(' ')}
                {advert.functionalities[0].split(' ').length > 1 ? '...' : ''}
              </p>
            </div>
            <button>Learn more</button>
          </AdvertsCard>
        ))}
      </AdvertsList>
    </AdvertsContainer>
  );
};
