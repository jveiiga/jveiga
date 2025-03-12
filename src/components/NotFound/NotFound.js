import React from 'react';
import { NotFoundWrapper, NotFoundTitle, NotFoundDescription, BackButton, NotFoundBackground } from './NotFoundStyled';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Página não encontrada</title>
        <link rel="canonical" href="http://mysite.com/contact" />
      </Helmet>
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