import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { AgencyContent, AgencyContentWrapper, AgencySession, AgencyWrapper, BackgroundImage, Button, Overlay, TitleContent } from './AgencyStyled';
import { Link } from 'react-router-dom';
// import { BackgroundImage } from '../Creative/CreativeStyled';


const Agency = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <AgencySession id="web developer">
      <AgencyWrapper id="agency-wrapper">
        <BackgroundImage id="creative-image" src={require('../../assets/images/background/dev-background.jpg')} alt="Agency Background" />
        <Overlay />
        <AgencyContentWrapper>
          <AgencyContent ref={ref} className={inView ? 'animate' : ''}>
            <TitleContent>
              <strong>Presença&nbsp;</strong><h2>Digital</h2>
            </TitleContent>
            <p>Desenvolvimento de sites para alcance, visibilidade e conversões</p>
            <Button as={Link} to="/agency-detail" className={isVisible ? 'animate' : ''}>Saber Mais</Button>
          </AgencyContent>
        </AgencyContentWrapper>
      </AgencyWrapper>
    </AgencySession>
  );
}

export default Agency