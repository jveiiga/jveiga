import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeSession, HomeWrapper, Overlay, HomeContent, TitleContent, Button } from './HomeStyled';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer>
      <HomeSession id="home">
        <HomeWrapper>
          <Overlay />
          <HomeContent className={isVisible ? 'animate' : ''}>
            <TitleContent>
              <strong>Soluções&nbsp;</strong>
              <h1>Estratégicas</h1>
            </TitleContent>
            <p>Desenvolvimento, Tráfego Pago e Fotografia</p>
            <Button>Saber Mais</Button>
          </HomeContent>
        </HomeWrapper>
      </HomeSession>
    </HomeContainer>
  );
};

export default Home;
