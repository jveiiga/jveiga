import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeSession, HomeWrapper, Overlay, HomeContent, TitleContent } from './HomeStyled';
// import { Link } from 'react-router-dom';

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
              <strong>Olá, tudo bem?&nbsp;</strong>
              <p>Sou Jeferson, muito prazer!</p>
            </TitleContent>
            <h1>Sites, conteúdo para redes sociais & tráfego pago</h1>
            {/* <Button as={Link} to="/home-detail">Saber Mais</Button> */}
          </HomeContent>
        </HomeWrapper>
      </HomeSession>
    </HomeContainer>
  );
};

export default Home;
