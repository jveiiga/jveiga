import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BackgroundImage, Button, Overlay, SeoContent, SeoSession, SeoWrapper, TitleContent } from './SeoStyled';
import { Link } from 'react-router-dom';

const Seo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inView]);

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
          <Button as={Link} to="/seo-detail" className={isVisible ? 'animate' : ''}>Saber Mais</Button>
        </SeoContent>
      </SeoWrapper>
    </SeoSession>
  );
}

export default Seo
