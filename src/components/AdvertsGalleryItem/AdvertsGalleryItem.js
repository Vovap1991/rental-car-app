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
  FuelAndEnginePar,
  CarDescription,
  BlockTitle,
  AccAndFuncText,
  RentalCondList,
  ModalImg,
  RentalCondListItem,
  RentalButton,
  ModalContainer,
  CloseModalButton,
} from './AdvertsGalleryItem.styled';

import normalHeart from '../../normal.svg';
import closeIcon from '../../close-icon.svg';
import activeHeart from '../../active-heart.svg';

import Modal from 'react-modal';
import { fetchCars } from '../../redux/operations';
import { selectCars, selectFavoriteCars } from '../../redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/carsSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '460px',
    padding: '40px',
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
  const [limit] = useState(12);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  console.log(favoriteCars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, page, limit]);

  const openModal = car => {
    setSelectedCar(car);
    setModalIsOpen(true);
  };

  const closeModal = () => setModalIsOpen(false);

  const loadMoreAdverts = () => {
    setPage(page + 1);
  };

  const handleFavoriteButtonClick = car => {
    dispatch(addFavorite(car));
  };

  const isFavorite = selectedCar => {
    return favoriteCars.some(car => car.id === selectedCar.id);
  };

  return (
    <AdvertsContainer>
      <AdvertsList>
        {cars.map(car => (
          <AdvertsCard key={car.id}>
            <FavoriteButton onClick={() => handleFavoriteButtonClick(car)}>
              <img src={isFavorite(car) ? activeHeart : normalHeart} alt="" />
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
            <LearnButton onClick={() => openModal(car)}>Learn more</LearnButton>
          </AdvertsCard>
        ))}
      </AdvertsList>
      {modalIsOpen && selectedCar && (
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <CloseModalButton type="button" onClick={closeModal}>
            <img src={closeIcon} alt="" />
          </CloseModalButton>
          <ModalContainer>
            <div>
              <ModalImg
                src={selectedCar.img || defaultImg}
                alt={selectedCar.make}
              />
            </div>
            <div>
              <AdvertsFirstInfoBclock>
                <AdvertsFirstInfoTextContent>
                  {selectedCar.make}{' '}
                  <AdvertsModelName>{selectedCar.model}</AdvertsModelName>,{' '}
                  {selectedCar.year}
                </AdvertsFirstInfoTextContent>
              </AdvertsFirstInfoBclock>

              <AdvertsSecondInfoTextContent>
                {selectedCar.address.split(',').slice(-2).join(' | ')} | Id:{' '}
                {selectedCar.id} | Year: {selectedCar.year} | Type:{' '}
                {selectedCar.type}
                <FuelAndEnginePar>
                  Fuel Consumption: {selectedCar.fuelConsumption} | Engine Size:{' '}
                  {selectedCar.engineSize}
                </FuelAndEnginePar>
              </AdvertsSecondInfoTextContent>

              <div>
                <CarDescription>{selectedCar.description}</CarDescription>
              </div>

              <div>
                <BlockTitle>Accessories and functionalities:</BlockTitle>
                <div>
                  {selectedCar.accessories.map((acc, index) => (
                    <AccAndFuncText key={index}>
                      {acc}{' '}
                      {index !== selectedCar.accessories.length - 1 && '| '}
                    </AccAndFuncText>
                  ))}
                </div>
                <div>
                  {selectedCar.functionalities.map((fun, index) => (
                    <AccAndFuncText key={index}>
                      {fun}{' '}
                      {index !== selectedCar.functionalities.length - 1 && '| '}
                    </AccAndFuncText>
                  ))}
                </div>
              </div>

              <div>
                <BlockTitle>Rental Conditions:</BlockTitle>
                <RentalCondList>
                  {selectedCar.rentalConditions
                    .split('\n')
                    .map((line, index) => (
                      <RentalCondListItem key={index}>
                        {line.split(/\b(\d+)\b/).map((part, partIndex) =>
                          isNaN(part) ? (
                            <span key={partIndex}>{part}</span>
                          ) : (
                            <span
                              key={partIndex}
                              style={{ color: '#3470FF', fontWeight: '600' }}
                            >
                              {'\u00A0'}
                              {part}
                            </span>
                          )
                        )}
                      </RentalCondListItem>
                    ))}
                  <RentalCondListItem>
                    Mileage:{'\u00A0'}
                    <span style={{ color: '#3470FF', fontWeight: '600' }}>
                      {selectedCar.mileage}
                    </span>
                  </RentalCondListItem>
                  <RentalCondListItem>
                    Price:{'\u00A0'}
                    <span style={{ color: '#3470FF', fontWeight: '600' }}>
                      {selectedCar.rentalPrice}
                    </span>
                  </RentalCondListItem>
                </RentalCondList>
              </div>
            </div>
          </ModalContainer>

          <RentalButton href={'tel:$+380730000000'} className="rental-button">
            Rental car
          </RentalButton>
        </Modal>
      )}
      <LoadMoreButton onClick={loadMoreAdverts}>Load more</LoadMoreButton>
    </AdvertsContainer>
  );
};
