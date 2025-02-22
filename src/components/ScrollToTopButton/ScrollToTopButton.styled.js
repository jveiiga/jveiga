import styled from 'styled-components';

export const ScrollButton = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  background-color: #007bff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s;
  z-index: 1000;

  &:hover {
    background-color: #0056b3;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
`;