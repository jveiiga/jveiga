import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import { LoadingWrapper, LoadingText, LoadingTextContainer } from './LoadingScreenStyled';
import typescriptLogo from '../../assets/images/logo/ts-logo.png';
import cssLogo from '../../assets/images/logo/css-logo.png';
import javascriptLogo from '../../assets/images/logo/js-logo.png';
import htmlLogo from '../../assets/images/logo/html-logo.png';
import reactLogo from '../../assets/images/logo/react-logo.png';
import nodeLogo from '../../assets/images/logo/node-logo.png';
import javaLogo from '../../assets/images/logo/java-logo.png';
import springLogo from '../../assets/images/logo/spring-logo.png';
import metaLogo from '../../assets/images/logo/meta-logo.png';
import googleLogo from '../../assets/images/logo/google-logo.png';
import gitLogo from '../../assets/images/logo/git-logo.png';
import githubLogo from '../../assets/images/logo/github-logo.png';
import canvaLogo from '../../assets/images/logo/canva-logo.png';
import vercelLogo from '../../assets/images/logo/vercel-logo.png';


const logos = [
  { src: typescriptLogo, alt: 'TypeScript Logo' },
  { src: cssLogo, alt: 'CSS Logo' },
  { src: javascriptLogo, alt: 'JavaScript Logo' },
  { src: htmlLogo, alt: 'HTML Logo' },
  { src: reactLogo, alt: 'React Logo' },
  { src: nodeLogo, alt: 'Node Logo' },
  { src: javaLogo, alt: 'Java Logo' },
  { src: springLogo, alt: 'Spring Logo' },
  { src: metaLogo, alt: 'Meta Logo' },
  { src: googleLogo, alt: 'Google Logo' },
  { src: gitLogo, alt: 'Git Logo' },
  { src: githubLogo, alt: 'GitHub Logo' },
  { src: canvaLogo, alt: 'Canva Logo' },
  { src: vercelLogo, alt: 'Vercel Logo' }
];

const LoadingScreen = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engine.world.gravity.y = 1; // Força de gravidade para queda

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent'
      }
    });

    // Reposicionar as paredes um pouco fora da tela
    const walls = [
      // Topo
      Matter.Bodies.rectangle(window.innerWidth / 2, -25, window.innerWidth, 50, { isStatic: true }),
      // Base
      Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 25, window.innerWidth, 50, { isStatic: true }),
      // Esquerda
      Matter.Bodies.rectangle(-25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true }),
      // Direita
      Matter.Bodies.rectangle(window.innerWidth + 25, window.innerHeight / 2, 50, window.innerHeight, { isStatic: true })
    ];

    // Cria os corpos com propriedades ajustadas para quicar e rotacionar
    const shapes = logos.map(logo => {
      const body = Matter.Bodies.circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        window.innerWidth <= 768 ? 20 : 40, // Ajusta o tamanho para dispositivos móveis
        {
          restitution: 1.0,      // Mais quique
          friction: 0.001,       // Pouco atrito
          frictionAir: 0.01,     // Resistência ao ar baixa
          render: {
            sprite: {
              texture: logo.src,
              xScale: window.innerWidth <= 768 ? 0.1 : 0.2, // Ajusta a escala para dispositivos móveis
              yScale: window.innerWidth <= 768 ? 0.1 : 0.2  // Ajusta a escala para dispositivos móveis
            }
          }
        }
      );
      // Adiciona rotação inicial
      Matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.2);
      return body;
    });

    Matter.World.add(engine.world, [...walls, ...shapes]);

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);
    Matter.Render.run(render);

    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(engine.world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
    };
  }, []);

  return (
    <LoadingWrapper ref={sceneRef}>
      <LoadingTextContainer>
        <LoadingText>Carregando....</LoadingText>
      </LoadingTextContainer>
    </LoadingWrapper>
  );
};

export default LoadingScreen;
