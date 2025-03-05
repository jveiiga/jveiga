import React from 'react';
import { ThankYouWrapper, ThankYouMessageOne, BackButton, ThankYouBackground, ThankYouMessageTwo } from './ThankYouStyled';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <ThankYouBackground src={require("../../assets/images/background/thankyou-background.jpg")} alt="Thank you" />
      <ThankYouWrapper>
        <ThankYouMessageOne>Fico feliz pelo seu interesse!</ThankYouMessageOne>
        <ThankYouMessageTwo>Em breve entrarei em contato.</ThankYouMessageTwo>
        <BackButton onClick={handleBackClick}>Voltar para a página inicial</BackButton>
      </ThankYouWrapper>
    </>
  );
}

export default ThankYou;