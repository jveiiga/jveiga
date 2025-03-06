import React from 'react';
import { NotFoundWrapper, NotFoundTitle, NotFoundDescription, BackButton, NotFoundBackground } from './NotFoundStyled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <NotFoundBackground src={require('../../assets/images/background/notfound-background.jpg')} alt="Thank you" />
      <NotFoundWrapper>
        <NotFoundTitle>Página não encontrada</NotFoundTitle>
        <NotFoundDescription>A página que você está procurando não existe ou foi removida.</NotFoundDescription>
        <BackButton onClick={handleBackClick}>Voltar para a página inicial</BackButton>
      </NotFoundWrapper>
    </>
  );
}

export default NotFound;