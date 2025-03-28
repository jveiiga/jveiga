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
    console.log(`Clicked on: ${href}`);
    setIsOpen(false);
  
    if (href === 'contact') {
      navigate('/contact'); // Navega para a página de contato
      console.log('Navegou para /#/contact');
    } else if (window.location.hash !== '#/') {
      // Se não estiver na página principal, navega para a página principal
      navigate('/#/');
      // Aguarda um pequeno delay para garantir que a página principal foi carregada
      setTimeout(() => {
        const target = document.getElementById(href);
        console.log('Target:', target);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          console.log('Rolou para a seção:', href);
        } else {
          console.error('Seção não encontrada:', href);
        }
      }, 100); // Reduza o tempo de espera
    } else {
      // Se já estiver na página principal, rola para a seção
      const target = document.getElementById(href);
      console.log('Target:', target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        console.log('Rolou para a seção:', href);
      } else {
        console.error('Seção não encontrada:', href);
      }
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