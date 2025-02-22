import styled from 'styled-components';

export const ContentWrapper = styled.div`
  opacity: 0;
  transform: translateX(-100%);
  transition: opacity 0.5s ease-in-out, transform 1s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateX(0);
  }
`;
