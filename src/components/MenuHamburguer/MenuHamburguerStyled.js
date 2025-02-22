import styled, { keyframes } from 'styled-components';

// Define a keyframe animation for the menu items
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MenuContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  outline: none;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1100;
`;

export const MenuIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: #FFF;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: center;
  border-radius: 15px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #FFF;
    transition: all 0.3s ease;
    transform-origin: center;
    right: 0;
    border-radius: 15px;
  }
  &:before {
    top: -10px;
  }
  &:after {
    top: 10px;
  }

  ${props =>
    props.isOpen &&
    `
    background-color: transparent;
    &:before {
      transform: rotate(45deg);
      top: 0;
    }
    &:after {
      transform: rotate(-45deg);
      top: 0;
    }
  `}
`;

export const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgba(11, 11, 11, 0.9);
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  border-top: 4px solid rgb(203, 52, 43);
  border-bottom: 4px solid #0056b3;
  transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease;
  z-index: 1000;
  will-change: transform;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  transition: transform 0.3s ease, visibility 0.3s ease, opacity 0.3s ease;
`;

export const MenuItem = styled.li`
  position: relative;
  padding: 1rem;
  border-bottom: 1px solid #333;
  animation: ${props => (props.isOpen ? slideIn : 'none')} 0.5s forwards;
  animation-delay: ${props => props.index * 0.1}s;
  
  &:last-child {
    border-bottom: none;
  }
  
  a {
    text-decoration: none;
    color: #FFF;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
  }

  .menu-number {
    font-size: 30px; 
    color: #555; 
    margin-right: 10px; 
  }

  .menu-text {
    font-size: 16px; 
    color: #FFF;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(203, 52, 43);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  display: block;
  margin: 1rem auto;
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-top: 1px solid #333;
  margin-top: auto;

  @media (min-width: 1121px) {
    display: none;
  }
`;

export const IconWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;
  background-color: transparent;
  margin: 0 10px;

  &:hover {
    background-color: #FFF;
  }

  &:hover img {
    filter: invert(1);
  }
`;

export const Image = styled.img`
  width: 20px;
  height: 20px;
  transition: filter 0.3s;
`;