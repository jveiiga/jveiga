import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FooterWrapper, FooterSection, FooterLinkList, FooterLink, SocialIcons, SocialIcon } from './FooterStyled';
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterSection>
        <p>© 2025 JVEIGA. Todos os direitos reservados.</p>
      </FooterSection>
      <FooterSection>
        <FooterLinkList>
          <FooterLink as={Link} smooth to="/#home">Home</FooterLink>
          <FooterLink as={Link} smooth to="/#web developer">Web Developer</FooterLink>
          <FooterLink as={Link} smooth to="/#google">Google</FooterLink>
          <FooterLink as={Link} smooth to="/#facebook">Facebook</FooterLink>
          {/* <FooterLink as={Link} smooth to="/#marketing">Marketing</FooterLink> */}
          <FooterLink as={Link} smooth to="/contact">Contact</FooterLink>
        </FooterLinkList>
      </FooterSection>
      <FooterSection>
        <SocialIcons>
          <SocialIcon href="https://www.instagram.com/jveiga.dev/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </SocialIcon>
          <SocialIcon href="https://github.com/jveiiga" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/jveiiga/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon href="mailto:jeferson.veiiga@icloud.com">
            <FaEnvelope />
          </SocialIcon>
        </SocialIcons>
      </FooterSection>
    </FooterWrapper>
  );
}

export default Footer;