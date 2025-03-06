import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const NotFoundBackground = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url(${require('../../assets/images/background/notfound-background.jpg')}) no-repeat center center;
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

export const NotFoundTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,
  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const NotFoundDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 0 #fff, -1px 0 #fff, 0 1px #fff, 0 -1px #fff,
  1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

export const BackButton = styled.a`
  font-size: 0.9rem;
  color: #007bff;
  cursor: pointer;
  z-index: 2; 
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }
`;