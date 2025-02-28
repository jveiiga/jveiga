import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Content, Image, Overlay, TitleContentImage, ToggleButton, TextContent, ImageWrapper, TextWrapper, ToogleWrapper } from './AgencyDetailStyled';
import { FaMoon, FaSun } from 'react-icons/fa';

const AgencyDetail = () => {
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
        <Image src={require('../../assets/images/background/agency-background.jpeg')} alt="Agency Detail" />
        <Overlay>
          <TitleContentImage>
            <h2>Agency</h2>
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
            <article id="agency">
              <header>
                <h1 style={{'marginBottom': '20px'}}>Agência – Estratégia e Execução Personalizada para Impulsionar o Crescimento Digital</h1>
              </header>
              <section id="agency-introducao">
                <p>
                  No cenário digital atual, muitas empresas se veem dispersas ao tentar contratar serviços pontuais – desde o desenvolvimento de um site até campanhas de marketing e identidade visual. Essa fragmentação conecta com a falta de integração, comunicação deficiente e resultados insatisfatórios. Se você busca uma solução completa, que una estratégia, execução e acompanhamento, a resposta está na abordagem integrada de uma agência.
                </p>
                <p>
                  Nossa proposta é transformar essa realidade. Oferecemos um serviço personalizado que integra desenvolvimento, marketing digital e branding, com o objetivo de criar um plano estratégico único para sua marca. Com comprometimento e expertise, tiramos a dispersão e trazemos resultados consistentes para o seu negócio.
                </p>
              </section>
              <section id="agency-solucoes-integradas">
                <header>
                  <h2>Soluções Integradas</h2>
                </header>
                <p>
                  Em vez de contratar serviços isolados, nossa abordagem integrada permite que você tenha um planejamento estratégico completo. Unimos as melhores práticas do Desenvolvimento Web, Tráfego Pago, SEO e Identidade Visual para criar campanhas com coesa e alinhadas com os objetivos do seu negócio.
                </p>
                <p>
                  Essa integração garante sinergia entre as ações, tornando cada investimento mais eficiente e direcionado ao crescimento real da sua marca. Ao optar por uma solução completa, você elimina a necessidade de gerenciar múltiplos fornecedores e ganha em agilidade, comunicação e resultados.
                </p>
              </section>
              <section id="agency-consultoria">
                <header>
                  <h2>Consultoria Digital Personalizada</h2>
                </header>
                <p>
                  Nosso serviço de consultoria digital é o ponto de partida para entender as reais necessidades da sua marca. Realizamos um diagnóstico completo do ambiente online, identificando pontos fortes, oportunidades e desafios. Com base nessa análise, elaboramos um plano sob medida que direciona todas as ações estratégicas.
                </p>
                <p>
                  Essa consultoria não só mapeia o cenário atual, como também define metas e indicadores de desempenho para que cada etapa do processo seja mensurável e alinhada aos seus objetivos de crescimento.
                </p>
              </section>
              <section id="agency-gestao-projetos">
                <header>
                  <h2>Gestão de Projetos Integrada</h2>
                </header>
                <p>
                  A coordenação de diversos serviços requer uma gestão de projetos eficiente. Nossa equipe garante que todas as áreas – desenvolvimento, marketing, SEO e identidade visual – trabalhem em sinergia. Cada etapa é monitorada de perto, permitindo ajustes rápidos e estratégicos sempre que necessário.
                </p>
                <p>
                  Essa gestão integrada assegura que todos os recursos sejam otimizados, gerando um fluxo de trabalho coeso e aumentando significativamente as chances de sucesso das campanhas.
                </p>
              </section>
              <section id="agency-crescimento">
                <header>
                  <h2>Crescimento Sustentável</h2>
                </header>
                <p>
                  Nosso compromisso é com o crescimento sustentável do seu negócio. Utilizando estratégias que combinam o poder do Tráfego Pago com os resultados duradouros do SEO e do Branding, criamos um caminho sólido para o aumento das conversões e da visibilidade da sua marca.
                </p>
                <p>
                  Com um planejamento estratégico de curto, médio e longo prazo, nossos serviços se adaptam conforme o mercado evolui, garantindo que sua marca permaneça relevante e competitiva. Essa visão integrada é essencial para transformar desafios em oportunidades e impulsionar o sucesso digital.
                </p>
              </section>
              <section id="agency-conclusao">
                <header>
                  <h2>Por fim</h2>
                </header>
                <p>
                  Se você deseja ir além de soluções isoladas e contar com um parceiro estratégico que entende as nuances do ambiente digital, nossa Agência é a escolha ideal. Oferecemos um serviço completo, que integra consultoria, gestão de projetos e execução personalizada para transformar a presença online da sua marca.
                </p>
                <p>
                  Nosso trabalho é pautado na transparência, na inovação e no comprometimento com resultados reais. Estamos prontos para desenvolver uma estratégia que una todas as frentes do marketing digital e leve sua empresa a um novo patamar de competitividade e crescimento.
                </p>
                <p>
                  Não permita que a falta de integração e a comunicação fragmentada comprometam o potencial do seu negócio. Aposte em uma abordagem completa, que alie expertise técnica a uma visão estratégica única e personalizada para a sua marca.
                </p>
              </section>
              <footer>
                <p>
                  Está pronto para transformar a forma como sua empresa se comunica e cresce no ambiente digital? Conheça nossos serviços integrados e descubra como podemos, juntos, construir um futuro de sucesso para sua marca.
                </p>
                <button onclick="location.href='/detalhes-agency'" type="button">Saiba Mais</button>
              </footer>
            </article>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
}

export default AgencyDetail;