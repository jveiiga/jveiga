import styled from "styled-components";

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

  box-shadow: 0 8px 20px rgba(254, 255, 255, 0.34);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.35);
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
