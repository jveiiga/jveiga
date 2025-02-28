import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.scrolled ? '#0F0F0F' : 'transparent'};
  color: #FFF;
  transition: background-color 0.3s ease;
  z-index: 10000;

  @media screen and (min-width: 920px) and (max-width: 1120px) {
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  width: 100px;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 320px) and (max-width: 1120px) {
    display: none;    
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
  }
`;

export const NavList = styled.ul``;

export const NavItem = styled.li`
  margin-left: 2rem;
`;

export const NavLink = styled.a`
  color: #FFF;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.75rem;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 0;
    height: 4px;
    border-radius: 15px;
    background-color: rgb(203, 52, 43);
    transition: width 0.3s ease, left 0.3s ease;
  }

  &.active::after {
    width: 100%;
    left: 0;
  }
`;

export const Link = styled.a`
  padding-right: 1rem;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  padding-left: 2rem;

  @media screen and (min-width: 320px) and (max-width: 1120px) {
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
  margin: 0 5px;

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