import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Content, Image, Overlay, TitleContentImage, ToggleButton, TextContent, ImageWrapper, TextWrapper, ToogleWrapper, ListWrapper } from './HomeDetailStyled';
import { FaMoon, FaSun } from 'react-icons/fa';

const HomeDetail = () => {
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
      <ImageWrapper ref={imageRef} isVisible={imageIsVisible}>
        <Image src={require('../../assets/images/background/desenvolvimento-background.jpeg')} alt="Home Detail" />
        <Overlay>
          <TitleContentImage>
            <strong>Desenvolvimento&nbsp;<br /></strong>
            <h2>Web</h2>
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
            <article id="desenvolvimento-web">
              <header>
                <h1 style={{ 'marginBottom': '20px' }}>Desenvolvimento Web: Soluções Estratégicas para Fortalecer Sua Presença Digital</h1>
              </header>
              <section id="dw-introducao">
                <p>
                  Você sente que sua presença online está defasada? Talvez o site de sua empresa não transmita a credibilidade e o profissionalismo que seus clientes exigem. Em um mercado onde a primeira impressão conta, um site mal estruturado pode ser o principal obstáculo para converter visitantes em clientes fiéis. Essa é a dor de muitas empresas que perdem oportunidades valiosas por não investir em uma solução digital moderna e eficiente.
                </p>
                <p>
                  É neste cenário que nossas soluções em Desenvolvimento Web se destacam. Nosso objetivo é transformar a maneira como sua marca se apresenta online, criando sites que não só impressionam visualmente, mas que também oferecem desempenho, segurança e alta taxa de conversão. Com um atendimento personalizado e tecnologias de ponta, queremos acabar com essa deficiência digital e impulsionar o crescimento do seu negócio.
                </p>
              </section>
              <section id="dw-sites-institucionais">
                <header>
                  <h2>Sites Institucionais</h2>
                </header>
                <p>
                  Para empresas que buscam transmitir seriedade, confiança e profissionalismo, um site institucional é fundamental. Nossa equipe desenvolve plataformas elegantes, pensadas para comunicar a essência de sua marca e reforçar sua credibilidade no mercado. Cada detalhe, desde a identidade visual até a usabilidade, é projetado para proporcionar uma experiência única ao usuário.
                </p>
                <p>
                  Além de um design sofisticado, investimos em recursos que garantem um carregamento rápido e uma navegação fluida, essenciais para manter o visitante engajado. Um site institucional de alta qualidade é o primeiro passo para fortalecer sua presença digital e aumentar a confiança do cliente.
                </p>
              </section>
              <section id="dw-landing-pages">
                <header>
                  <h2>Landing Pages</h2>
                </header>
                <p>
                  Quando o objetivo é converter visitantes em leads ou clientes, as Landing Pages são a solução ideal. Criadas com foco exclusivo em campanhas específicas, essas páginas são otimizadas para maximizar a taxa de conversão. Cada elemento da chamada para ação aos formulários de captura, é estrategicamente posicionado para incentivar o visitante a tomar a ação desejada.
                </p>
                <p>
                  Nossa abordagem para Landing Pages integra design atrativo, conteúdo persuasivo e performance otimizada. Se você deseja lançar um novo produto ou promover uma campanha pontual, nossas Landing Pages oferecem resultados mensuráveis e alta eficácia.
                </p>
              </section>
              <section id="dw-hotsites">
                <header>
                  <h2>Hotsites</h2>
                </header>
                <p>
                  Em momentos especiais como eventos, lançamentos ou promoções, um hotsite pode ser a ferramenta ideal para gerar impacto imediato. Desenvolvemos páginas temporárias que têm como foco a divulgação de ações específicas, com design moderno e performance voltada para resultados rápidos.
                </p>
                <p>
                  Os hotsites são ideais para campanhas de marketing que exigem agilidade e personalização. Eles são rápidos de desenvolver e podem ser integrados a outras estratégias digitais, permitindo que sua marca se comunique de forma direta e objetiva com seu público-alvo.
                </p>
              </section>
              <section id="dw-one-page">
                <header>
                  <h2>One Page</h2>
                </header>
                <p>
                  Para negócios que valorizam a simplicidade e objetividade, os sites One Page são a escolha perfeita. Em uma única página, reunimos todas as informações essenciais, proporcionando uma navegação intuitiva e uma experiência dinâmica para o usuário.
                </p>
                <p>
                  Com layout responsivo e design minimalista, os One Page facilitam a comunicação da mensagem principal da sua empresa, sem dispersar a atenção do visitante. Essa abordagem é ideal para marcas que desejam transmitir informações de forma clara, rápida e impactante.
                </p>
              </section>
              <section id="dw-diferenciais">
                <header>
                  <h2>Diferenciais e Benefícios</h2>
                </header>
                <p>
                  Nossas soluções de Desenvolvimento Web não se limitam apenas à estética. Trabalhamos com tecnologias modernas que garantem:
                </p>
                <ListWrapper>
                  <ul>
                    <li>Design Responsivo – Seu site se adapta a qualquer dispositivo, garantindo uma experiência consistente.</li>
                    <li>Otimização para SEO – Estruturamos o conteúdo para que seu site seja facilmente encontrado pelos motores de busca.</li>
                    <li>Carregamento Rápido – Utilizamos técnicas avançadas para reduzir o tempo de carregamento, melhorando a experiência do usuário.</li>
                    <li>Segurança e Confiabilidade – Implementamos protocolos de segurança para proteger dados e garantir a integridade do seu site.</li>
                  </ul>
                </ListWrapper>

                <p>
                  Além disso, nosso atendimento personalizado e nosso comprometimento com resultados fazem toda a diferença. Acreditamos que cada projeto é único e, por isso, nossa equipe trabalha de forma colaborativa para entender as necessidades específicas de cada cliente.
                </p>
              </section>
              <section id="dw-conclusao">
                <header>
                  <h2>Por fim</h2>
                </header>
                <p>
                  Se o seu site não está gerando os resultados que você espera, é hora de repensar sua estratégia digital. Com nossas soluções em Desenvolvimento Web, você terá um parceiro comprometido com o sucesso da sua marca. Transforme a sua dor de uma presença online deficiente em uma oportunidade de crescimento e inovação.
                </p>
                <p>
                  Nossa expertise abrange desde a criação de sites institucionais robustos até Landing Pages focadas na conversão, passando por hotsites para ações temporárias e sites One Page para uma comunicação direta e objetiva. Tudo isso aliado a diferenciais tecnológicos que garantem desempenho, segurança e uma experiência de usuário superior.
                </p>
                <p>
                  Não deixe sua empresa ficar para trás. Invista em um site que realmente represente a qualidade e o potencial do seu negócio. Estamos prontos para transformar sua presença digital e levá-la a um novo patamar.
                </p>
              </section>
              <footer>
                <p>
                  Pronto para revolucionar seu ambiente digital? Descubra todos os benefícios que um site moderno pode oferecer e garanta o crescimento que sua marca merece.
                </p>
                <button onclick="location.href='/detalhes-desenvolvimento-web'" type="button">Saiba Mais</button>
              </footer>
            </article>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
}

export default HomeDetail;