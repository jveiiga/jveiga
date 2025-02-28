import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: absolute; /* Impede que afete o fluxo normal do layout */
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
  overflow-y: scroll;
  scroll-snap-type: y mandatory; /* Habilita o scroll snapping */
  scroll-behavior: smooth; /* Faz a rolagem ser suave */

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
`;







