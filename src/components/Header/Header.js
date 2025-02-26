import React, { useEffect, useState } from 'react';
import { HeaderWrapper, Logo, Nav, NavList, NavItem, NavLink, Icons, IconWrapper, Image, NavWrapper } from './HeaderStyled';
import logoImage from '../../assets/images/logo.png';
import linkedIn from '../../assets/images/icon/linkedin.svg';
import gitHub from '../../assets/images/icon/github.svg';
import email from '../../assets/images/icon/email.png';
import HamburgerMenu from '../MenuHamburguer/MenuHamburguer';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    console.log('useEffect rodou'); // Verificar se o useEffect está sendo executado
    const handleScroll = () => {
      console.log('Scroll detectado:', window.scrollY); // Verificar se o evento de rolagem está sendo detectado
      setIsScrolled(window.scrollY > 50);
    };

    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Seção visível:', entry.target.id); // Verificar qual seção está visível
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  console.log('isScrolled:', isScrolled); // Verificar se o isScrolled está mudando

  const handleClick = (e, href) => {
    e.preventDefault();
    setActiveLink(href);
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeaderWrapper isScrolled={isScrolled}>
      <NavLink href="#home">
        <Logo src={logoImage} alt="Logo" />
      </NavLink>
      <NavWrapper>
        <Nav>
          <NavList>
            <NavItem><NavLink href="#home" onClick={(e) => handleClick(e, '#home')} className={activeLink === '#home' ? 'active' : ''}>Home</NavLink></NavItem>
            <NavItem><NavLink href="#social" onClick={(e) => handleClick(e, '#social')} className={activeLink === '#social' ? 'active' : ''}>Social</NavLink></NavItem>
            <NavItem><NavLink href="#marketing" onClick={(e) => handleClick(e, '#marketing')} className={activeLink === '#marketing' ? 'active' : ''}>Marketing</NavLink></NavItem>
            <NavItem><NavLink href="#seo" onClick={(e) => handleClick(e, '#seo')} className={activeLink === '#seo' ? 'active' : ''}>Seo</NavLink></NavItem>
            <NavItem><NavLink href="#agency" onClick={(e) => handleClick(e, '#agency')} className={activeLink === '#agency' ? 'active' : ''}>Agency</NavLink></NavItem>
            <NavItem><NavLink href="#contact" onClick={(e) => handleClick(e, '#contact')} className={activeLink === '#contact' ? 'active' : ''}>Contact</NavLink></NavItem>
          </NavList>
        </Nav>
        <Icons>
          <IconWrapper href='https://www.linkedin.com/in/jveiiga/' target='_blank'><Image src={linkedIn} alt="Logo LinkedIn" /></IconWrapper>
          <IconWrapper href='https://github.com/jveiiga' target='_blank'><Image src={gitHub} alt="Logo GitHub" /></IconWrapper>
          <IconWrapper href='mailto:jeferson.veiiga@icloud.com'><Image src={email} alt="Logo Email" /></IconWrapper>
        </Icons>
      </NavWrapper>
      <HamburgerMenu />
    </HeaderWrapper>
  );
};

export default Header;