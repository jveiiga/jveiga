import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Content, Image, Overlay, TitleContentImage, ToggleButton, TextContent, ImageWrapper, TextWrapper, ToogleWrapper, ListWrapper } from './SocialDetailStyled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const SocialDetail = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const { ref: imageRef, inView: imageIsVisible } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textIsVisible } = useInView({ triggerOnce: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container darkMode={darkMode}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Social Media</title>
        <link rel="canonical" href="https://jveiga.dev/#/social-detail" />
      </Helmet>
      <ImageWrapper ref={imageRef} isVisible={imageIsVisible}>
        <Image src={require('../../assets/images/background/social-background.jpg')} alt="Social Detail" />
        <Overlay>
          <TitleContentImage>
            <strong>Mídia&nbsp;</strong><h2>Social</h2>
          </TitleContentImage>
        </Overlay>
      </ImageWrapper>
      <TextWrapper ref={textRef} isVisible={textIsVisible}>
        <Content ref={ref} className={isVisible ? 'animate' : ''}>
          <ToogleWrapper>
            <ToggleButton onClick={toggleDarkMode} darkMode={darkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <article id="trafego-pago">
              <header>
                <h1 style={{ 'marginBottom': '20px' }}>Tráfego Pago: Acelerando Resultados com Anúncios Estratégicos</h1>
              </header>
              <section id="tp-introducao">
                <p>
                  Muitos empreendedores investem tempo e dinheiro em marketing digital, mas ainda enfrentam a frustração de não ver resultados expressivos. Se você já sentiu a dor de campanhas que não convertem, sabe o quanto é desafiador atrair o público certo e transformar cliques em vendas. Essa situação pode prejudicar o crescimento do seu negócio e gerar insegurança quanto ao retorno do investimento.
                </p>
                <p>
                  O Tráfego Pago surge como uma solução eficaz para seu problema. Ao investir em anúncios segmentados e estratégias bem definidas, é possível alcançar um público qualificado de maneira rápida e escalável. Nossa abordagem visa não apenas aumentar o volume de visitas, mas transformar essas visitas em oportunidades reais de negócio.
                </p>
              </section>
              <section id="tp-conceito">
                <header>
                  <h2>O que é Tráfego Pago e Por que Investir?</h2>
                </header>
                <p>
                  O Tráfego Pago consiste em investir em plataformas de anúncios para promover seu negócio de forma imediata e direcionada. Diferente das estratégias orgânicas, que podem levar tempo para gerar resultados, os anúncios pagos oferecem a previsibilidade e o controle necessários para alcançar seu público-alvo de maneira rápida.
                </p>
                <p>
                  Investir em Tráfego Pago permite que você direcione sua mensagem a pessoas que têm real interesse em seus produtos ou serviços, aumentando as chances de conversão e maximizando o retorno sobre o investimento (ROI). É a solução ideal para negócios que desejam acelerar seus resultados e sair na frente da concorrência.
                </p>
              </section>
              <section id="tp-plataformas">
                <header>
                  <h2>Google Ads e Meta Ads</h2>
                </header>
                <p>
                  Nossa expertise abrange as principais plataformas de anúncios do mercado. Com o Google Ads, sua marca aparece exatamente quando o potencial cliente pesquisa por soluções relacionadas ao seu negócio. Já com o Meta Ads (Facebook e Instagram Ads), você atinge um público altamente segmentado, aproveitando os dados demográficos e comportamentais dessas redes.
                </p>
                <p>
                  Cada plataforma possui suas particularidades, e nossa equipe desenvolve campanhas otimizadas para tirar o máximo proveito de cada uma delas. Essa abordagem personalizada garante que o investimento seja direcionado de forma eficiente, gerando resultados reais e mensuráveis.
                </p>
              </section>
              <section id="tp-segmentacao">
                <header>
                  <h2>Segmentação Avançada e Otimização Contínua</h2>
                </header>
                <p>
                  Um dos grandes diferenciais do Tráfego Pago é a capacidade de segmentação avançada. Nossa estratégia começa com a definição clara do público-alvo, utilizando dados demográficos, interesses e comportamentos para criar campanhas que realmente dialogam com as necessidades do consumidor.
                </p>
                <p>
                  Além disso, implementamos técnicas de retargeting e remarketing para recuperar visitantes que demonstraram interesse, mas ainda não converteram. Aliado a testes A/B, esse processo de otimização contínua permite que cada campanha seja refinada em tempo real, aumentando a eficiência e o ROI.
                </p>
              </section>
              <section id="tp-beneficios">
                <header>
                  <h2>Benefícios do Tráfego Pago</h2>
                </header>
                <p>
                  Ao investir em Tráfego Pago, você obtém resultados que vão além do simples aumento de visitas. Nossa abordagem integrada garante:
                </p>
                <ListWrapper>
                  <ul>
                    <li>Aumento imediato do tráfego qualificado;</li>
                    <li>Mensuração precisa dos resultados através de indicadores específicos;</li>
                    <li>Flexibilidade para ajustar campanhas conforme o desempenho;</li>
                    <li>Crescimento escalável, possibilitando investimentos progressivos conforme a performance.</li>
                  </ul>
                </ListWrapper>
                <p>
                  Esses benefícios se traduzem em crescimento real para seu negócio, com a segurança de que cada centavo investido está trabalhando para gerar conversões e consolidar sua marca no mercado.
                </p>
              </section>
              <section id="tp-conclusao">
                <header>
                  <h2>Por fim</h2>
                </header>
                <p>
                  Se você está cansado de estratégias que não entregam o esperado, chegou a hora de apostar em uma solução que traz resultados imediatos e mensuráveis. O Tráfego Pago, aliado a uma segmentação avançada e otimização contínua, é a ferramenta certa para transformar cliques em clientes e expandir sua presença digital.
                </p>
                <p>
                  Nossa equipe está pronta para planejar, executar e monitorar campanhas que atendam às especificidades do seu negócio. Com uma abordagem transparente e orientada a resultados, trabalhamos lado a lado com nossos clientes para superar desafios e alcançar o sucesso.
                </p>
                <p>
                  Não deixe que a insegurança e a incerteza comprometam o crescimento da sua empresa. Descubra como anúncios bem planejados podem acelerar seu desempenho no mercado e gerar um retorno sobre investimento que realmente faça a diferença.
                </p>
              </section>
              <footer>
                <p>
                  Está pronto para impulsionar seu negócio com campanhas de Tráfego Pago estratégicas e eficazes? Conheça nossas soluções e transforme seu investimento em resultados concretos.
                </p>
                <button onclick="location.href='/detalhes-trafego-pago'" type="button">Saiba Mais</button>
              </footer>
            </article>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
}

export default SocialDetail;