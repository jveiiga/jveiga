import React, { useEffect } from 'react';
import { BackgroundImage, MarketingTwoContent, MarketingTwoSession, MarketingTwoWrapper, Overlay, TitleContent } from './MarketingTwoStyled';
import { useInView } from 'react-intersection-observer';


const MarketingTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('seo-wrapper');

      if (creativeWrapper) {
        creativeWrapper.style.backgroundPositionY = `${scrollPosition * 1}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MarketingTwoSession id="seo">
      <MarketingTwoWrapper id="seo-wrapper">
        <BackgroundImage id="seo-image" src={require('../../assets/images/background/marketingTwo-background.jpg')} alt="Marketing Background" />
        <Overlay />
        <MarketingTwoContent ref={ref} className={inView ? 'animate' : ''}>
          <TitleContent>
            <strong>Cultive a &nbsp;</strong><h2>Inspiração</h2>
          </TitleContent>
          <p>Design e comunicação conectam marcas ao público certo.</p>
        </MarketingTwoContent>
      </MarketingTwoWrapper>
    </MarketingTwoSession>
  );
}

export default MarketingTwo