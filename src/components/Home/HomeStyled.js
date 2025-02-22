import styled from 'styled-components';
import homeBackground from '../../assets/images/background/home-background.png';

export const HomeSession = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${homeBackground});
  background-size: cover;
  background-position: center;
  will-change: transform;
  transition: transform 0.1s ease-out; // Esta linha foi adicionada para suavizar a animação
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); 
`;

export const HomeContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);

  h1 {
    font-family: 'Raleway', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
  }

`;

export const TitleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1.5rem;
  margin-top: 15rem;

  p {
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
    /* text-transform: uppercase; */
  }

  strong {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
    /* text-transform: uppercase; */
  }
`;

export const Button = styled.button`
  position: relative;
  padding: 1rem 4rem;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 0.875rem;
  text-transform: uppercase;
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.8);
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #FFF;
    color: #000;
  }
`;