import styled from 'styled-components';

export const ThankYouWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  /* background-color: #f5f5f5; */
  z-index: 1; /* Garante que o conteúdo esteja por cima */
`;

export const ThankYouBackground = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0; /* Garante que a imagem esteja no fundo */
  opacity: 0.5;
`;

export const ThankYouMessageOne = styled.h1`
  font-size: 2.5rem;
  color: #FFF;
  font-family: 'Raleway', sans-serif;
  font-weight: 800;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  margin-bottom: 1rem;
  z-index: 2; /* Garante que o texto esteja por cima da imagem */
`;

export const ThankYouMessageTwo = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-weight: 100;
  font-size: 2rem;
  color: #FFF;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  margin-bottom: 1rem;
  z-index: 2; /* Garante que o texto esteja por cima da imagem */
`;

export const BackButton = styled.button`
  font-size: 1rem;
  color: #007bff;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 2; /* Garante que o botão esteja por cima da imagem */

  &:hover {
    text-decoration: underline;
  }
`;