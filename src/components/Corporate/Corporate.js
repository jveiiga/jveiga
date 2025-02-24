import React, { useEffect } from 'react';
import { BackgroundImage, CorporateContent, CorporateSession, CorporateWrapper, Overlay, TitleContent } from './CorporateStyled';
import { useInView } from 'react-intersection-observer';

const Corporate = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const corporateWrapper = document.getElementById('corporate-wrapper');

      if (corporateWrapper) {
        corporateWrapper.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <CorporateSession id="corporate">
      <CorporateWrapper id="corporate-wrapper">
        <BackgroundImage id="creative-image" src={require('../../assets/images/background/corporate-background.jpg')} alt="Creative Background" />
        <Overlay />
        <CorporateContent ref={ref} className={inView ? 'animate' : ''}>
          <TitleContent>
            <h2>Corporação</h2>
          </TitleContent>
          <p>Estratégia e inovação para marcas que querem crescer gerando impacto.</p>
        </CorporateContent>
      </CorporateWrapper>
    </CorporateSession>
  );
};

export default Corporate;
