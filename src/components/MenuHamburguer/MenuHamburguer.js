import React, { useState } from 'react';
import { MenuButton, MenuContainer, MenuIcon, MenuItem, MenuList, Logo, FooterIcons, IconWrapper, Image } from './MenuHamburguerStyled';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import logoImage from '../../assets/images/logo.png';


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleItemClick = (href) => {
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <MenuContainer>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon isOpen={isOpen} />
      </MenuButton>
      <MenuList isOpen={isOpen}>
        <Logo src={logoImage} alt="Logo" />
        {['#home', '#creative', '#corporate', '#social', '#seo', '#marketing', '#agency', '#contact'].map((href, index) => (
          <MenuItem key={href} isOpen={isOpen} index={index}>
            <a href={href} onClick={() => handleItemClick(href)}>
              <span className="menu-number">{index + 1}.</span>
              <span className="menu-text">{href.slice(1).charAt(0).toUpperCase() + href.slice(2)}</span>
            </a>
          </MenuItem>
        ))}
        <FooterIcons>
          <IconWrapper href='https://www.linkedin.com/in/jveiiga/' target='_blank'><Image src={FaLinkedin} alt="Logo LinkedIn" /></IconWrapper>
          <IconWrapper href='https://github.com/jveiiga' target='_blank'><Image src={FaGithub} alt="Logo GitHub" /></IconWrapper>
          <IconWrapper href='mailto:jeferson.veiiga@icloud.com'><Image src={FaEnvelope} alt="Logo Email" /></IconWrapper>
        </FooterIcons>
      </MenuList>
    </MenuContainer>
  );
};

export default HamburgerMenu;