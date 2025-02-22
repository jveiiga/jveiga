import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 8888;
  background-color: #000; /* Fundo preto */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingTextContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 24px;
  font-family: 'Courier New', Courier, monospace;
`;

export const LoadingText = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid;
  animation: typing 5s steps(12, end) infinite, blink-caret 0.75s step-end infinite; /* Ajuste para 5 segundos e 12 steps */

  @keyframes typing {
    from { width: 0; }
    to { width: 100%; }
  }

  @keyframes blink-caret {
    from, to { border-color: transparent; }
    50% { border-color: #fff; }
  }
`;