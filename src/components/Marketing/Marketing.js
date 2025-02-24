import React, { useEffect } from 'react';
import { BackgroundImage, MarketingContent, MarketingContentWrapper, MarketingSession, MarketingWrapper, Overlay, TitleContent } from './MarketingStyled';
import { useInView } from 'react-intersection-observer';

const Marketing = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('marketing-wrapper');

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
    <MarketingSession id="marketing">
      <MarketingWrapper id="marketing-wrapper">
        <BackgroundImage id="marketin-image" src={require('../../assets/images/background/marketing-background.jpg')} alt="Marketing Background" />
        <Overlay />
        <MarketingContentWrapper>
          <MarketingContent ref={ref} className={inView ? 'animate' : ''}>
            <TitleContent>
              <h2>Marketing</h2>
            </TitleContent>
            <p>Planejamento eficaz para visibilidade, relevância e crescimento.</p>
          </MarketingContent>
        </MarketingContentWrapper>
      </MarketingWrapper>
    </MarketingSession>
  );
}

export default Marketing

