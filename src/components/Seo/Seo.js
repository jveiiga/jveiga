import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BackgroundImage, Button, Overlay, SeoContent, SeoSession, SeoWrapper, TitleContent } from './SeoStyled';

const Seo = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('seo-wrapper');

      if (creativeWrapper) {
        creativeWrapper.style.backgroundPositionY = `${scrollPosition * 1}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SeoSession id="seo">
      <SeoWrapper id="seo-wrapper">
        <BackgroundImage id="seo-image" src={require('../../assets/images/background/seo-background.jpg')} alt="Seo Background" />
        <Overlay />
        <SeoContent ref={ref} className={inView ? 'animate' : ''}>
          <TitleContent>
            <h2>SEO</h2>
          </TitleContent>
          <p>Conteúdo estratégico e otimização para alcançar resultados reais.</p>
          <Button>Saber Mais</Button>
        </SeoContent>
      </SeoWrapper>
    </SeoSession>
  );
}

export default Seo
