import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeSession, HomeWrapper, Overlay, HomeContent, TitleContent, Button } from './HomeStyled';
import { Link } from 'react-router-dom';

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
              <p>Estratégicas</p>
            </TitleContent>
            <h1>Desenvolvimento de Sites e Tráfego Pago</h1>
            {/* <Button as={Link} to="/home-detail">Saber Mais</Button> */}
          </HomeContent>
        </HomeWrapper>
      </HomeSession>
    </HomeContainer>
  );
};

export default Home;
