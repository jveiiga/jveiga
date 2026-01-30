import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

export const FloatingButton = styled.a`
  position: fixed;
  right: 1rem;
  bottom: ${({ variant }) => (variant === "whatsapp" ? "4.5rem" : "1rem")};

  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;

  background-color: ${({ variant }) =>
    variant === "whatsapp" ? "#25D366" : "#007bff"};

  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  cursor: pointer;
  z-index: 1000;

  animation: ${pulse} 2.4s infinite;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    animation: none;
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.35);
  }
`;
