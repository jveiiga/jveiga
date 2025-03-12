import React from 'react';
import { ThankYouWrapper, ThankYouMessageOne, BackButton, ThankYouBackground, ThankYouMessageTwo } from './ThankYouStyled';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Obrigado! Entrarei em contato.</title>
        <link rel="canonical" href="https://jveiga.dev/#/thanks" />
      </Helmet>
      <ThankYouBackground src={require('../../assets/images/background/thankyou-background.jpg')} alt="Thank you" />
      <ThankYouWrapper>
        <ThankYouMessageOne>Fico feliz pelo seu interesse!</ThankYouMessageOne>
        <ThankYouMessageTwo>Em breve entrarei em contato.</ThankYouMessageTwo>
        <BackButton onClick={handleBackClick}>Voltar para a página inicial</BackButton>
      </ThankYouWrapper>
    </>
  );
}

export default ThankYou;