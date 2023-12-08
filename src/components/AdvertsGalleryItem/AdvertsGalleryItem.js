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

import Modal from 'react-modal';
import { fetchCars } from '../../redux/operations';
import { selectCars } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const cars = useSelector(selectCars);
  console.log(cars);

  const closeModal = () => setModalIsOpen(false);

  // const loadMoreAdverts = () => {
  //   setPage(page + 1);
  //   console.log(page);
  // };

  return (
    <AdvertsContainer>
      <AdvertsList>
        {cars.map(car => (
          <AdvertsCard key={car.id}>
            <FavoriteButton>
              <img src={normalHeart} alt="" />
            </FavoriteButton>

            <AdvertsImg src={car.img || defaultImg} alt={car.make} />
            <AdvertsFirstInfoBclock>
              <AdvertsFirstInfoTextContent>
                {car.make} <AdvertsModelName>{car.model}</AdvertsModelName>,{' '}
                {car.year}
              </AdvertsFirstInfoTextContent>
              <span>{car.rentalPrice}</span>
            </AdvertsFirstInfoBclock>
            <AdvertsSecondInfoBclock>
              <AdvertsSecondInfoTextContent>
                {car.address.split(',').slice(-2).join(' | ')} |{' '}
                {car.rentalCompany}
              </AdvertsSecondInfoTextContent>
              <AdvertsSecondInfoTextContent>
                {car.type} | {car.model} | {car.id} |{' '}
                {car.functionalities[0].split(' ').slice(0, 1).join(' ')}
                {car.functionalities[0].split(' ').length > 1 ? '...' : ''}
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
      <LoadMoreButton>Load more</LoadMoreButton>
    </AdvertsContainer>
  );
};
