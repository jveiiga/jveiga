import styled, { keyframes } from 'styled-components';

export const slideInLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  /* text-align: center; */
  position: relative;
  width: 100vw;
  background-color: ${({ lightMode }) => (lightMode ? 'white' : 'black')};
  color: ${({ lightMode }) => (lightMode ? 'black' : 'white')};
  transition: background-color 0.5s, color 0.5s;
`;

export const ToggleButton = styled.button`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  cursor: pointer;
  background: none;
  border: none;
  color: ${({ lightMode }) => (lightMode ? '#FFD700' : '#5F61B5')};
  font-size: 1.5rem;
`;

export const GradientText = styled.span`
  background: ${({ lightMode }) => (lightMode ? 'none' : 'linear-gradient(135deg, #8F91D9, #5F61B5)')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ lightMode }) => (lightMode ? '#FFD700' : 'transparent')};
  color: ${({ lightMode }) => (lightMode ? '#FFD700' : 'transparent')};
`;

export const ToogleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`;

export const ImageWrapper = styled.div`
  animation: ${({ isVisible }) => (isVisible ? fadeIn : 'none')} 2s ease-out;
`;

export const TextWrapper = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideInLeft : 'none')} 1s ease-out;
`;

export const Image = styled.img`
  width: 100vw;
  height: 40vh;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  animation: ${fadeIn} 3s ease-out;
`;

export const TitleContentImage = styled.div`
  display: flex;
  align-items: baseline;
  height: 3rem;
  margin-bottom: 1.5rem;

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    animation: ${slideInRight} 1s ease-out;
  }

  strong {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    animation: ${slideInRight} 1s ease-out;
  }
`;

export const TitleContent = styled.div`
  padding: 0 2rem;
  h1 {
    font-size: 2rem;
  }
`;

export const TextContent = styled.div`
  padding: 0 2rem;

  p {
    text-align: left;
    font-weight: 100;
    line-height: 2rem;
  }

  h2 {
    margin: 1rem 0;
  }

  @media (min-width: 1024px) {
    padding: 0 10rem;
  }

  @media (min-width: 1280px) {
    padding: 0 15rem;
  }

  @media (min-width: 1600px) {
    padding: 0 30rem;
  }
`;

export const Content = styled.div`
  animation: ${fadeIn} 2s ease-out;
`;

export const ListWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    text-align: start;

    &ul, li {
        list-style: disc;
    }

`