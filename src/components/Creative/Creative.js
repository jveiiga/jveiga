import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CreativeContent, CreativeContentWrapper, CreativeSession, CreativeWrapper, Overlay, TitleContent } from './CreativeStyled';

const Creative = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const creativeWrapper = document.getElementById('creative-wrapper');

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
    <CreativeSession id="creative">
      <CreativeWrapper id="creative-wrapper">
        <Overlay />
        <CreativeContentWrapper>
          <CreativeContent ref={ref} className={inView ? 'animate' : ''}>
            <TitleContent>
              <strong>Ser&nbsp;</strong><h2>Criativo</h2>
            </TitleContent>
            <p>A identidade visual transforma marcas e destaca negócios. Cada detalhe conta.</p>

          </CreativeContent>
        </CreativeContentWrapper>
      </CreativeWrapper>
    </CreativeSession>
  );
}

export default Creative;