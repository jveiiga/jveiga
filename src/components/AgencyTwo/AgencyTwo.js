import React from 'react';
import { useInView } from 'react-intersection-observer';
import { AgencyTwoContent, AgencyTwoSession, AgencyTwoWrapper, Overlay, TitleContent } from './AgencyTwoStyled';

const AgencyTwo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

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