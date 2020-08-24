import React from 'react';
import Lottie from 'react-lottie';

import animationData from '../../assets/food-delivery.json';

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return <Lottie options={defaultOptions} />;
};

export default Loader;
