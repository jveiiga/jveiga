  import styled from 'styled-components';
import homeBackground from '../../assets/images/background/myimage-background.png';

export const HomeContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

export const HomeSession = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
`;

export const HomeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${homeBackground});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  will-change: background-position;
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
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }

  h1 {
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
    font-size: 2.6rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    /* text-transform: uppercase; */
  }

  strong {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
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
  cursor: pointer;

  &:hover {
    background-color: #FFF;
    color: #000;
    text-shadow: none;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
`
