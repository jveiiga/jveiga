
import styled from "styled-components";

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  opacity: 1;
  transform: none;
  overflow: visible;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  overflow: visible;

  &.show {
    opacity: 1;
  }
`;
