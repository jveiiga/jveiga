import styled from 'styled-components';

export const MarketingSession = styled.section`
  height: 100vh;
  position: relative;
`;

export const MarketingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(47, 20, 20, 0.1); 
  z-index: 2;
`;

export const MarketingContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: 3;
  text-align: center;
`;

export const MarketingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 10%;
  position: relative;
  color: #FFF;
  text-shadow: 2px 2px 4px rgb(0, 0, 0);
  opacity: 0;
  transform: translateX(-50%);
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
  align-items: baseline;
  height: 3rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.5rem;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
  }

  strong {
    font-size: 3rem;
    font-family: 'Raleway', sans-serif;
    font-size: 2.5rem;
    font-weight: 100;
  }
`;
