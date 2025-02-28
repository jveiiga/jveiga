import React, { useEffect, useState } from 'react';
import { BackgroundImage, Button, Overlay, SocialContent, SocialContentWrapper, SocialSession, SocialWrapper, TitleContent } from './SocialStyled';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const Social = () => {
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
    <SocialSession id="social">
      <SocialWrapper id="social-wrapper">
        <BackgroundImage id="creative-image" src={require('../../assets/images/background/social-background.jpg')} alt="Social Background" />
        <Overlay />
        <SocialContentWrapper>
            <SocialContent ref={ref} className={inView ? 'animate' : ''}>
              <TitleContent>
                <strong>Mídia&nbsp;</strong><h2>Social</h2>
              </TitleContent>
              <p>Gestão inteligente para engajamento, alcance e conversões.</p>
              <Button as={Link} to="/social-detail" className={isVisible ? 'animate' : ''}>Saber Mais</Button> 
            </SocialContent>
        </SocialContentWrapper>
      </SocialWrapper>
    </SocialSession>
  );
}

export default Social