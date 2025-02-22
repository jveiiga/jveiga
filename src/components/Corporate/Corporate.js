import React, { useEffect } from 'react';
import { CorporateContent, CorporateSession, CorporateWrapper, Overlay, TitleContent } from './CorporateStyled';
import { useInView } from 'react-intersection-observer';

const Corporate = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('corporate-wrapper');
      
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
    <CorporateSession id="corporate">
      <CorporateWrapper id="corporate-wrapper">
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
}

export default Corporate