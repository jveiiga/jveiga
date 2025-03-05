import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavList, NavItem, NavLink, Icons, IconWrapper, Image, NavWrapper } from './HeaderStyled';
import logoImage from '../../assets/images/logo.png';
import linkedIn from '../../assets/images/icon/linkedin.svg';
import gitHub from '../../assets/images/icon/github.svg';
import email from '../../assets/images/icon/email.png';
import HamburgerMenu from '../MenuHamburguer/MenuHamburguer';

const Header = ({ currentPath }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      const timer = setTimeout(() => {
        const sections = document.querySelectorAll('section');
        const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.3,
        };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveLink(`#${entry.target.id}`);
            }
          });
        }, options);
        sections.forEach(section => observer.observe(section));
  
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
          const scrollPos = window.scrollY + 100;
          sections.forEach(section => {
            if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
              setActiveLink(`#${section.getAttribute('id')}`);
            }
          });
        };
  
        window.addEventListener('scroll', handleScroll);
        handleScroll();
  
        return () => {
          window.removeEventListener('scroll', handleScroll);
          sections.forEach(section => observer.unobserve(section));
        };
      }, 200);
  
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (currentPath === '/contact') {
      setActiveLink('#contact');
    }
  }, [currentPath]);

  const handleClick = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/`);
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveLink(`#${id}`);
  };

  return (
    <HeaderWrapper scrolled={isScrolled ? 'true' : undefined}>
      <NavLink href="#home" onClick={(e) => handleClick(e, 'home')}>
        <Logo src={logoImage} alt="Logo" />
      </NavLink>
      <NavWrapper>
        <Nav>
          <NavList>
            <NavItem>
              <NavLink
                href="#home"
                onClick={(e) => handleClick(e, 'home')}
                className={activeLink === '#home' ? 'active' : ''}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#social"
                onClick={(e) => handleClick(e, 'social')}
                className={activeLink === '#social' ? 'active' : ''}
              >
                Social
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#marketing"
                onClick={(e) => handleClick(e, 'marketing')}
                className={activeLink === '#marketing' ? 'active' : ''}
              >
                Marketing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#seo"
                onClick={(e) => handleClick(e, 'seo')}
                className={activeLink === '#seo' ? 'active' : ''}
              >
                Seo
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="#agency"
                onClick={(e) => handleClick(e, 'agency')}
                className={activeLink === '#agency' ? 'active' : ''}
              >
                Agency
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to="/contact"
                className={activeLink === '#contact' ? 'active' : ''}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
        <Icons>
          <IconWrapper href='https://www.linkedin.com/in/jveiiga/' target='_blank'>
            <Image src={linkedIn} alt="Logo LinkedIn" />
          </IconWrapper>
          <IconWrapper href='https://github.com/jveiiga' target='_blank'>
            <Image src={gitHub} alt="Logo GitHub" />
          </IconWrapper>
          <IconWrapper href='mailto:jeferson.veiiga@icloud.com'>
            <Image src={email} alt="Logo Email" />
          </IconWrapper>
        </Icons>
      </NavWrapper>
      <HamburgerMenu />
    </HeaderWrapper>
  );
};

export default Header;