import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { AgencyTwoContent, AgencyTwoSession, AgencyTwoWrapper, Overlay, TitleContent } from './AgencyTwoStyled';



const AgencyTwo = () => {
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
    <AgencyTwoSession id="agency">
      <AgencyTwoWrapper id="agency-wrapper">
        <Overlay />
        <AgencyTwoContent ref={ref} className={inView ? 'animate' : ''}>
          <TitleContent>
          <strong>Pequenas&nbsp;</strong><h2>Empresas</h2>
          </TitleContent>
          <p>Design e tipografia criam identidade única e fortalecem sua presença online.</p>
        </AgencyTwoContent>
      </AgencyTwoWrapper>
    </AgencyTwoSession>
  );
}

export default AgencyTwo