import React, { useEffect } from 'react';
import { HomeSession, HomeWrapper, Overlay, HomeContent, TitleContent, Button } from './HomeStyled';

const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('home-wrapper');
      
      if (creativeWrapper) {
        const maxScroll = creativeWrapper.clientHeight - window.innerHeight;
        const backgroundPositionY = Math.min(scrollPosition * 0.5, maxScroll);
        creativeWrapper.style.backgroundPositionY = `${backgroundPositionY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HomeSession id="home">
      <HomeWrapper id="home-wrapper">
        <Overlay />
        <HomeContent>
          <TitleContent>
            <strong>Soluções&nbsp;</strong><h1>Estratégicas</h1>
          </TitleContent>
          <p>Desenvolvimento, Tráfego Pago e Fotografia</p>
          <Button>
            Saber Mais
          </Button>
        </HomeContent>
      </HomeWrapper>
    </HomeSession>
  );
}

export default Home;