import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Content, Image, Overlay, TitleContentImage, ToggleButton, TextContent, ImageWrapper, TextWrapper, ListWrapper, ToogleWrapper } from './SeoDetailStyled';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const SeoDetail = () => {
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
        <title>Seo</title>
        <link rel="canonical" href="https://jveiga.dev/#/seo-detail" />
      </Helmet>
      <ImageWrapper ref={imageRef} isVisible={imageIsVisible}>
        <Image src={require('../../assets/images/background/seo-background.jpg')} alt="Seo Detail" />
        <Overlay>
          <TitleContentImage>
            <h2>Seo</h2>
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
            <article id="seo-conteudo">
              <header>
                <h1>SEO e Conteúdo Estratégico: Conquistando o Topo do Google e Gerando Tráfego Orgânico</h1>
              </header>
              <section id="seo-introducao">
                <header>
                  <h2>Introdução</h2>
                </header>
                <p>
                  Em um mundo digital onde a visibilidade é crucial, muitas empresas sofrem com a frustração de não serem encontradas pelos seus clientes. A falta de posicionamento nos motores de busca e de conteúdo relevante pode significar a perda de oportunidades e um baixo retorno sobre o investimento em marketing. Essa dor afeta não só o volume de visitas, mas a credibilidade e o crescimento do negócio.
                </p>
                <p>
                  O SEO (Search Engine Optimization) e uma estratégia de conteúdo bem definida são a solução para esse desafio. Ao otimizar seu site para os mecanismos de busca e criar conteúdo que realmente responda às dúvidas e necessidades do seu público, você pode transformar sua presença online e conquistar resultados duradouros.
                </p>
              </section>
              <section id="seo-importancia">
                <header>
                  <h2>Por que o SEO é Essencial?</h2>
                </header>
                <p>
                  O SEO é fundamental para que sua empresa seja encontrada organicamente, sem depender exclusivamente de anúncios pagos. Um bom posicionamento nos resultados de busca aumenta a credibilidade, atrai tráfego qualificado e gera oportunidades de conversão de maneira sustentável.
                </p>
                <p>
                  Quando o seu site aparece nas primeiras posições do Google, ele transmite autoridade e confiança. Isso é crucial para transformar visitantes em clientes e para construir uma marca forte e reconhecida no mercado.
                </p>
              </section>
              <section id="seo-palavras">
                <header>
                  <h2>Pesquisa de Palavras-Chave e Otimização On-Page</h2>
                </header>
                <p>
                  Nossa estratégia inicia com uma pesquisa detalhada de palavras-chave. Identificamos os termos que seu público utiliza ao buscar produtos ou serviços semelhantes aos seus. Essa etapa é essencial para orientar a criação de conteúdo e estruturar seu site de maneira que os motores de busca consigam indexá-lo corretamente.
                </p>
                <p>
                  A otimização on-page envolve ajustes na estrutura do site, na velocidade de carregamento e na qualidade do conteúdo. Cada página é trabalhada para garantir que os algoritmos do Google a interpretem de forma positiva, aumentando as chances de um melhor ranqueamento.
                </p>
              </section>
              <section id="seo-conteudo-relevante">
                <header>
                  <h2>Conteúdo Relevante e Estratégico</h2>
                </header>
                <p>
                  Conteúdo é o coração de qualquer estratégia digital de sucesso. Criar textos, vídeos e imagens que dialoguem com as dúvidas e interesses do seu público é fundamental para manter a audiência engajada e atrair novos visitantes.
                </p>
                <p>
                  Nossa equipe de especialistas desenvolve conteúdo otimizado, que alia qualidade, criatividade e técnicas avançadas de SEO. Isso garante que seu site não só seja bem posicionado, mas que também se torne uma referência no seu segmento, gerando tráfego orgânico de forma contínua.
                </p>
              </section>
              <section id="seo-linkbuilding">
                <header>
                  <h2>Link Building e Construção de Autoridade</h2>
                </header>
                <p>
                  A construção de uma rede de links de qualidade é outra peça fundamental na estratégia de SEO. Ao conquistar links de sites relevantes e de autoridade, você reforça a credibilidade do seu domínio e melhora significativamente o seu posicionamento nos motores de busca.
                </p>
                <p>
                  Implementamos técnicas de link building que atraem parceiros estratégicos e ampliam a visibilidade da sua marca. Esse esforço contínuo é responsável por transformar seu site em uma referência dentro do mercado.
                </p>
              </section>
              <section id="seo-beneficios">
                <header>
                  <h2>Benefícios de Investir em SEO e Conteúdo Estratégico</h2>
                </header>
                <p>
                  Ao apostar em uma estratégia completa de SEO e conteúdo, sua empresa experimenta diversos benefícios:
                </p>
                <ListWrapper>
                  <ul>
                    <li>Maior visibilidade orgânica e posicionamento privilegiado nos resultados de busca;</li>
                    <li>Aumento de tráfego qualificado, sem custos recorrentes com anúncios;</li>
                    <li>Geração de leads e conversões de forma sustentável;</li>
                    <li>Fortalecimento da autoridade e credibilidade da marca no mercado.</li>
                  </ul>
                </ListWrapper>
                <p>
                  Esses resultados se traduzem em crescimento contínuo e em uma presença digital robusta, que coloca sua empresa à frente da concorrência.
                </p>
              </section>
              <section id="seo-conclusao">
                <header>
                  <h2>Por fim</h2>
                </header>
                <p>
                  Se a sua marca ainda não alcançou o posicionamento desejado nos motores de busca, é hora de investir em uma estratégia de SEO e conteúdo que faça a diferença. Nosso compromisso é transformar a sua presença online, fazendo com que seu site se torne uma ferramenta poderosa de atração e conversão.
                </p>
                <p>
                  Com uma abordagem integrada – que vai da pesquisa de palavras-chave à criação de conteúdo relevante e à construção de autoridade – oferecemos a solução completa para que sua empresa seja encontrada e admirada pelo público certo. Essa estratégia não só gera tráfego, mas constrói uma base sólida para o crescimento sustentável do seu negócio.
                </p>
                <p>
                  Permita que nossa expertise transforme a maneira como seu público vê sua marca. Com transparência, qualidade e um atendimento personalizado, estamos prontos para implementar uma estratégia que coloque sua empresa no topo.
                </p>
              </section>
              <footer>
                <p>
                  Quer descobrir como conquistar as primeiras posições no Google e atrair tráfego orgânico qualificado? Não perca tempo – conheça nossas soluções em SEO e Conteúdo Estratégico.
                </p>
                <button onclick="location.href='/detalhes-seo-conteudo'" type="button">Saiba Mais</button>
              </footer>
            </article>

          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
}

export default SeoDetail;