import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BackgroundImage, CreativeContent, CreativeContentWrapper, CreativeSession, CreativeWrapper, Overlay, TitleContent } from './CreativeStyled';

// Importando a imagem diretamente
import creativeBackground from '../../assets/images/background/creative-background.jpg';

const Creative = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // A animação pode ser disparada várias vezes
    threshold: 0.3, // 30% da seção precisa estar visível para ativar a animação
  });

  const [fadeClass, setFadeClass] = useState(''); // Estado para controlar a animação

  // Controlar animação baseada na visibilidade
  useEffect(() => {
    if (inView) {
      setFadeClass('animate'); // Aplica a classe de animação quando visível
    } else {
      setFadeClass(''); // Remove a classe quando invisível
    }
  }, [inView]);

  return (
    <CreativeSession id="creative" ref={ref}>
      <CreativeWrapper id="creative-wrapper">
        {/* Usando a imagem importada */}
        <BackgroundImage id="creative-image" src={creativeBackground} alt="Creative Background" />
        <Overlay />
        <CreativeContentWrapper>
          <CreativeContent className={fadeClass}>
            <TitleContent>
              <strong>Ser&nbsp;</strong><h2>Criativo</h2>
            </TitleContent>
            <p>A identidade visual transforma marcas e destaca negócios. Cada detalhe conta.</p>
          </CreativeContent>
        </CreativeContentWrapper>
      </CreativeWrapper>
    </CreativeSession>
  );
};

export default Creative;
