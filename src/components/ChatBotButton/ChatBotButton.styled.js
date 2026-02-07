import styled from "styled-components";
import avatar from "../../assets/images/avatar.png";

export const FloatingChatButton = styled.button`
  position: fixed;
  bottom: 140px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #cb342b;
  background-image: url(${avatar});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
  }

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    right: 2px;
    width: 15px;
    height: 15px;
    background: rgb(216, 79, 72);
    /* border: 1px solid #fff; */
    border-radius: 50%;
  }
`;