import styled, { keyframes } from 'styled-components';

// Definindo keyframes para as animações
const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ThankYouWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  z-index: 1; /* Garante que o conteúdo esteja por cima */
`;

export const ThankYouBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url(${require('../../assets/images/background/thankyou-background.jpg')}) no-repeat center center;
  background-size: cover;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6); /* Ajuste a opacidade conforme desejado */
  }
`;


export const ThankYouMessageOne = styled.h1`
  font-size: 3rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 100;
  color: #FFF;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  margin-bottom: 1rem;
  z-index: 2; /* Garante que o texto esteja por cima da imagem */
  animation: ${slideInFromRight} 2s forwards;
`;

export const ThankYouMessageTwo = styled.h1`
  font-size: 2.6rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  color: #FFF;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  margin-bottom: 1rem;
  z-index: 2; /* Garante que o texto esteja por cima da imagem */
  animation: ${slideInFromLeft} 2s forwards;
`;

export const BackButton = styled.button`
  font-size: 1rem;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2; /* Garante que o botão esteja por cima da imagem */
  animation: ${fadeIn} 4.5s forwards;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;