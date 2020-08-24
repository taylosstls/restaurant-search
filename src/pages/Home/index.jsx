import React, { useState } from 'react';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import { useSelector } from 'react-redux';
import restaurantLogo from '../../assets/logo.svg';
import restaurantFake from '../../assets/restaurante-fake.png';

import { Card, RestaurantCard, Modal, Loader, Skeleton } from '../../components';

import {
  Wrapper,
  Container,
  LogoRestaurant,
  Search,
  FormContainer,
  TextFieldColor,
  Carousel,
  CarouselTitle,
  MapContainer,
  ModalImage,
  ModalTitle,
  ModalContent,
} from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState(null);
  const [placeId, setPlaceId] = useState(null);
  const [modalOpened, setModalOpened] = useState(false);
  const { restaurants, restaurantSelected } = useSelector(state => state.restaurants);
  const hasRestaurants = restaurants.length > 0;

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    initialSlide: 2,
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setQuery(inputValue);
    }
  };

  const handlePress = e => {
    e.preventDefault();
    setQuery(inputValue);
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <LogoRestaurant src={restaurantLogo} alt="Restaurant Finder" />

          <FormContainer>
            <TextFieldColor
              label="Pesquisar restaurantes"
              variant="filled"
              fullWidth
              value={inputValue}
              onKeyPress={handleKeyPress}
              onChange={e => setInputValue(e.target.value)}
            />

            <IconButton type="button" aria-label="search" onClick={handlePress}>
              <SearchIcon />
            </IconButton>
          </FormContainer>

          {hasRestaurants ? (
            <>
              <CarouselTitle>Na sua Área</CarouselTitle>
              <Carousel {...settings}>
                {restaurants.map(restaurant => (
                  <Card
                    key={restaurant.place_id}
                    photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFake}
                    title={restaurant.name}
                  />
                ))}
              </Carousel>
            </>
          ) : (
              <Loader />
            )}
        </Search>
        {restaurants.map(restaurant => (
          <RestaurantCard
            key={restaurant.place_id}
            restaurant={restaurant}
            onClick={() => {
              setPlaceId(restaurant.place_id);
              setModalOpened(true);
            }}
          />
        ))}
      </Container>
      <MapContainer query={query} placeId={placeId} />

      <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
          <>
            <ModalImage
              src={restaurantSelected?.photos[0].getUrl()}
              alt={restaurantSelected?.name}
            />
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>Telefone: {restaurantSelected?.formatted_phone_number}</ModalContent>

            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>
              {restaurantSelected?.opening_hours?.open_now
                ? 'Aberto agora 😀'
                : 'Fechado neste horário 😞'}
            </ModalContent>
          </>
        ) : (
            <>
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
              <Skeleton width="10px" height="10px" />
            </>
          )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
