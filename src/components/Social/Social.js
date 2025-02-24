import React, { useEffect } from 'react';
import { BackgroundImage, Button, Overlay, SocialContent, SocialContentWrapper, SocialSession, SocialWrapper, TitleContent } from './SocialStyled';
import { useInView } from 'react-intersection-observer';

const Social = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('social-wrapper');

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
            <Button>Saber Mais</Button> 
          </SocialContent>
        </SocialContentWrapper>
      </SocialWrapper>
    </SocialSession>
  );
}

export default Social