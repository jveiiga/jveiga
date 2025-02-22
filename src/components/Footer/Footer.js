import React from 'react';
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
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#creative">Creative</FooterLink>
          <FooterLink href="#corporate">Corporate</FooterLink>
          <FooterLink href="#social">Social</FooterLink>
          <FooterLink href="#seo">SEO</FooterLink>
          <FooterLink href="#marketing">Marketing</FooterLink>
          <FooterLink href="#agency">Agency</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
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