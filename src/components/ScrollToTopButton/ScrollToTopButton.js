import React from 'react';

import arrowCircleUp from '../../assets/images/icon/arrow-circle-up.png';
import { Image, ScrollButton } from './ScrollToTopButton.styled';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    const home = document.querySelector('#home');
  
    if (home) {
      home.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  

  return (
    <ScrollButton onClick={scrollToTop}>
      <Image src={arrowCircleUp} alt="Scroll to Top" />
    </ScrollButton>
  );
};

export default ScrollToTopButton;