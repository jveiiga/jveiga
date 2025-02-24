import styled from 'styled-components';

export const ContentWrapper = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory; /* Habilita o scroll snapping */
  scroll-behavior: smooth; /* Faz a rolagem ser suave */

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
`;
