import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #FFF;
  color: #000;
  padding: 40px 0;
  width: 100%;
  bottom: 0;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

export const FooterSection = styled.div`
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const FooterLinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const SocialIcon = styled.a`
  color: #000;
  font-size: 1.5rem;
  margin: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #000;
    color: #FFF;
  }
`;