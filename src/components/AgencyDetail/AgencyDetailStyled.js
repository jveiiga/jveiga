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
  /* min-height: 100vh; */
  /* text-align: center; */
  position: relative;
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ lightMode }) => (lightMode ? "white" : "black")};
  color: ${({ lightMode }) => (lightMode ? "black" : "white")};
  transition: background-color 0.5s, color 0.5s;
`;

export const ImageWrapper = styled.div`
  position: relative;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : "none")} 2s ease-out;
  overflow-x: hidden;
`;

export const TextWrapper = styled.div`
  animation: ${({ isVisible }) => (isVisible ? slideInLeft : "none")} 1s
    ease-out;
`;

export const Image = styled.img`
  width: 100%;
  height: 40vh;
  object-fit: cover;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  /* top: 0;
  left: 0;
  width: 100%;
  min-height: 40vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2rem;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  animation: ${fadeIn} 3s ease-out;
`;

export const TitleContentImage = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem 3rem;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    animation: ${slideInRight} 1s ease-out;
  }

  strong {
    font-size: 3rem;
    font-family: "Raleway", sans-serif;
    font-weight: 100;
    animation: ${slideInRight} 1s ease-out;
  }

  @media screen and (min-width: 320px) and (max-width: 640px) {
    h2 {
      font-size: 2.5rem;
    }
    strong {
      font-size: 2.5rem;
    }
  }
`;

export const TitleContent = styled.div`
  padding: 0 2rem;
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
`;

export const Content = styled.div`
  animation: ${fadeIn} 2s ease-out;
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

export const GradientText = styled.span`
  background: ${({ darkMode }) =>
    darkMode ? "none" : "linear-gradient(135deg, #8F91D9, #5F61B5)"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ darkMode }) =>
    darkMode ? "#FFD700" : "transparent"};
  color: ${({ darkMode }) => (darkMode ? "#FFD700" : "transparent")};
`;
