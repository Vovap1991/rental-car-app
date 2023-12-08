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
  LearnButton,
  LoadMoreButton,
} from './AdvertsGalleryItem.styled';

import normalHeart from '../../normal.svg';
import { fetchAdverts } from 'api';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '540px',
    height: '750px',
    borderRadius: '24px',
    background: '#FFF',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    background: 'rgba(18, 20, 23, 0.50)',
  },
};

Modal.setAppElement('#root');

export const AdvertsGalleryItem = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    const getAdverts = async () => {
      try {
        const adverts = await fetchAdverts(page, limit);

        setAdverts(adverts);
      } catch (error) {
        console.log(error);
      }
    };
    getAdverts();
  }, []);

  const closeModal = () => setModalIsOpen(false);

  const loadMoreAdverts = () => {
    setPage(page + 1);
    console.log(page);
  };

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
            <LearnButton onClick={() => setModalIsOpen(true)}>
              Learn more
            </LearnButton>

            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              onRequestClose={closeModal}
              contentLabel="Example Modal"
            >
              <h2>fdbsdfg</h2>

              <button onClick={closeModal}>закрыть</button>
            </Modal>
          </AdvertsCard>
        ))}
      </AdvertsList>
      <LoadMoreButton onClick={loadMoreAdverts}>Load more</LoadMoreButton>
    </AdvertsContainer>
  );
};
