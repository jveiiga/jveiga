import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuButton, MenuContainer, MenuIcon, MenuItem, MenuList, Logo, FooterIcons, IconWrapper } from './MenuHamburguerStyled';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logoImage from '../../assets/images/logo.png';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    if (href === 'contact') {
      navigate('/contact');
    } else if (window.location.pathname !== '/') {
      navigate(`/#${href}`);
      setTimeout(() => {
        const target = document.getElementById(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const target = document.getElementById(href);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </MenuButton>
      <MenuList isOpen={isOpen}>
        <Logo src={logoImage} alt="Logo" />
        {['home', 'social', 'marketing', 'seo', 'agency', 'contact'].map((href, index) => (
          <MenuItem key={href} isOpen={isOpen} index={index}>
            <a href={href === 'contact' ? '/contact' : `#${href}`} onClick={(e) => handleItemClick(e, href)}>
              <span className="menu-number">{index + 1}.</span>
              <span className="menu-text">{href.charAt(0).toUpperCase() + href.slice(1)}</span>
            </a>
          </MenuItem>
        ))}
        <FooterIcons>
          <IconWrapper href='https://www.linkedin.com/in/jveiiga/' target='_blank'>
            <FaLinkedin size={24} />  {/* Usando o componente do ícone diretamente */}
          </IconWrapper>
          <IconWrapper href='https://github.com/jveiiga' target='_blank'>
            <FaGithub size={24} />    {/* Usando o componente do ícone diretamente */}
          </IconWrapper>
          <IconWrapper href='mailto:jeferson.veiiga@icloud.com'>
            <FaEnvelope size={24} />  {/* Usando o componente do ícone diretamente */}
          </IconWrapper>
        </FooterIcons>
      </MenuList>
    </MenuContainer>
  );
};

export default HamburgerMenu;