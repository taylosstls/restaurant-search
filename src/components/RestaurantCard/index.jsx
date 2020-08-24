import React, { useState } from 'react';
import ReactStars from 'react-stars';

import { Skeleton } from '../index';
import { Restaurant, RestaurantInfo, InfoTitle, InfoAddress, RestaurantPhoto } from './styles';

import restaurantFake from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <InfoTitle>{restaurant.name}</InfoTitle>
        <ReactStars
          count={5}
          size={16}
          value={restaurant.rating}
          color1="#707070"
          color2="#e7711c"
          edit={false}
          half
        />
        <InfoAddress>
          {restaurant.formatted_address ? restaurant.formatted_address : restaurant.vicinity}
        </InfoAddress>
      </RestaurantInfo>
      <RestaurantPhoto
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantFake}
        alt={restaurant.name}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
