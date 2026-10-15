
import styled, { keyframes } from "styled-components";

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
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ lightMode }) => (lightMode ? "white" : "black")};
  color: ${({ lightMode }) => (lightMode ? "black" : "white")};
  transition: background-color 0.5s, color 0.5s;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 40vh;
  min-height: 250px;
  background: linear-gradient(
    135deg,
    #171717 0%,
    #292929 50%,
    #111111 100%
  );
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 2s ease-out;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
`;

export const TitleContentImage = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 3rem;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    animation: ${slideInRight} 1s ease-out;
  }

  strong {
    font-family: "Raleway", sans-serif;
    font-weight: 100;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    padding: 1rem;

    h2 {
      font-size: 2rem;
    }
  }
`;

export const Content = styled.div`
  animation: ${fadeIn} 2s ease-out;
`;

export const TextWrapper = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideInLeft : "none")} 1s
    ease-out;
`;

export const TextContent = styled.div`
  padding: 0 2rem;

  p {
    text-align: left;
    font-weight: 100;
    line-height: 2rem;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  h2 {
    margin: 2rem 0 1rem;
    font-size: 1.3rem;
  }

  section {
    margin-bottom: 2rem;
  }

  ul {
    padding-left: 1.2rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  display: block;
`;

export const ToogleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
`;

export const ToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;
