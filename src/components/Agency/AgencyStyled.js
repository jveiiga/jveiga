import styled from 'styled-components';
import agencyBackground  from '../../assets/images/background/agency-background.jpg'

export const AgencySession = styled.section`
  height: 100vh;
  `;

export const AgencyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${agencyBackground});
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
  background-color: rgba(0, 0, 0, 0.1); 
`;

export const AgencyContentWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

export const AgencyContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  padding-right: 10%;
  position: relative;
  z-index: 4;
  color: white;
  text-align: center;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  opacity: 0;
  transform: translateX(50%);
  transition: opacity 1s ease-out, transform 1s ease-out;

  &.animate {
    opacity: 1;
    transform: translateX(0);
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
  }

  @media screen and (min-width: 320px) and (max-width: 460px) {
    align-items: center;
    padding: 0;
  }

  @media screen and (min-width: 461px) and (max-width: 580px) {
    align-items: center;
    padding: 0;
  }

  @media screen and (min-width: 581px) and (max-width: 790px) {
    align-items: center;
    padding: 0;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 1.5rem;

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  strong {
    font-family: 'Raleway', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
  }
`;