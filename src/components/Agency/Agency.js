import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AgencyContent, AgencyContentWrapper, AgencySession, AgencyWrapper, Overlay, TitleContent } from './AgencyStyled';


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
        creativeWrapper.style.backgroundPositionY = `${scrollPosition * 1}px`;
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
        <Overlay />
        <AgencyContentWrapper>
          <AgencyContent ref={ref} className={inView ? 'animate' : ''}>
            <TitleContent>
              <strong>Melhores&nbsp;</strong><h2>Soluções</h2>
            </TitleContent>
            <p>Empresas que querem crescer precisam de presença digital forte.</p>
          </AgencyContent>
        </AgencyContentWrapper>
      </AgencyWrapper>
    </AgencySession>
  );
}

export default Agency