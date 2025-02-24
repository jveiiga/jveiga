import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AgencyContent, AgencyContentWrapper, AgencySession, AgencyWrapper, BackgroundImage, Button, Overlay, TitleContent } from './AgencyStyled';
// import { BackgroundImage } from '../Creative/CreativeStyled';


const Agency = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('agency-wrapper');

      if (creativeWrapper) {
        creativeWrapper.style.backgroundPositionY = `${scrollPosition * 5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AgencySession id="agency">
      <AgencyWrapper id="agency-wrapper">
        <BackgroundImage id="creative-image" src={require('../../assets/images/background/agency-background.jpeg')} alt="Agency Background" />
        <Overlay />
        <AgencyContentWrapper>
          <AgencyContent ref={ref} className={inView ? 'animate' : ''}>
            <TitleContent>
              <strong>Melhores&nbsp;</strong><h2>Soluções</h2>
            </TitleContent>
            <p>Empresas que querem crescer precisam de presença digital forte.</p>
            <Button>Saber Mais</Button>
          </AgencyContent>
        </AgencyContentWrapper>
      </AgencyWrapper>
    </AgencySession>
  );
}

export default Agency