import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  Container,
  Content,
  Image,
  Overlay,
  TitleContentImage,
  ToggleButton,
  TextContent,
  ImageWrapper,
  TextWrapper,
  ToogleWrapper,
} from "./MarketingDetailStyled";
import { FaMoon, FaSun } from "react-icons/fa";

const MarketingDetail = () => {
  const [lightMode, setLightMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  const { ref: imageRef, inView: imageIsVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textIsVisible } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <Container lightMode={lightMode}>
      <ImageWrapper ref={imageRef} isVisible={imageIsVisible}>
        <Image
          src={require("../../assets/images/background/gmn1-background.png")}
          alt="Agency Detail"
        />
        <Overlay>
          <TitleContentImage>
            <strong>Perfil de negócios&nbsp;</strong>
            <h2>Google</h2>
          </TitleContentImage>
        </Overlay>
      </ImageWrapper>
      <TextWrapper ref={textRef} isVisible={textIsVisible}>
        <Content ref={ref} className={isVisible ? "animate" : ""}>
          <ToogleWrapper>
            <ToggleButton onClick={toggleLightMode} lightMode={lightMode}>
              {lightMode ? (
                <FaMoon color="#5F61B5" />
              ) : (
                <FaSun color="#FFD700" />
              )}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <article id="agency">
              <main
                style={{
                  maxWidth: "900px",
                  margin: "3rem auto",
                  padding: "2rem 0",
                  fontFamily: "Arial, sans-serif",
                  lineHeight: "1.6",
                }}
              >
                <article>
                  <header style={{ marginBottom: "2.5rem" }}>
                    <h1 style={{ fontSize: "2.2rem", marginBottom: "1rem" }}>
                      Perfil de Negócios Google: Apareça no Maps e Conquiste
                      Clientes Locais
                    </h1>
                    <p style={{ fontSize: "1.1rem" }}>
                      Seu cliente está procurando por você agora. Ele vai te
                      encontrar?
                    </p>
                  </header>

                  <section style={{ marginBottom: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>
                      O <strong>Perfil de Negócios Google</strong> é a vitrine
                      digital que coloca sua empresa exatamente onde seus
                      clientes estão: no <strong>Google Maps</strong> e nas
                      <strong> buscas locais</strong>.
                    </p>

                    <p style={{ marginBottom: "1rem" }}>
                      Quando alguém pesquisa <em>"seu serviço perto de mim"</em>
                      , é o seu negócio que precisa aparecer primeiro, com
                      fotos, avaliações, horário de funcionamento e o botão de
                      WhatsApp a um clique de distância.
                    </p>

                    <p>
                      Mas ter um perfil não é suficiente.{" "}
                      <strong>Ele precisa trabalhar a seu favor.</strong>
                    </p>
                  </section>

                  <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
                      O erro da maioria dos empresários
                    </h2>

                    <p style={{ marginBottom: "1rem" }}>
                      Muitos negócios até criam o perfil, mas deixam ele
                      abandonado:
                    </p>

                    <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
                      <li>❌ Informações desatualizadas ou incompletas</li>
                      <li>❌ Horários errados que frustram clientes</li>
                      <li>❌ Fotos amadoras ou inexistentes</li>
                      <li>❌ Avaliações negativas sem resposta</li>
                      <li>❌ Categoria errada que afasta seu público</li>
                      <li>❌ Sem otimização para aparecer nas buscas</li>
                    </ul>

                    <p>
                      O resultado?{" "}
                      <strong>Clientes perdidos todos os dias</strong>, enquanto
                      concorrentes com perfis bem configurados ficam com essas
                      vendas.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
                      Um perfil mal gerenciado prejudica sua reputação
                    </h2>

                    <p>
                      Cliente chega no horário que está no Google e encontra
                      fechado? Ele não volta. E ainda deixa uma avaliação
                      negativa.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2.5rem" }}>
                    <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>
                      Como eu transformo seu Perfil de Negócios Google em uma
                      máquina de clientes
                    </h2>

                    <ul style={{ paddingLeft: "1.5rem" }}>
                      <li>
                        ✅ Configuração completa e profissional desde a base
                      </li>
                      <li>
                        ✅ Otimização para aparecer nas primeiras posições
                      </li>
                      <li>
                        ✅ Atualizações constantes de informações e novidades
                      </li>
                      <li>✅ Gestão estratégica de avaliações e respostas</li>
                      <li>✅ Fotos profissionais e conteúdo que converte</li>
                      <li>✅ Monitoramento e ajustes contínuos</li>
                      <li>✅ Anúncios locais estratégicos direto no perfil</li>
                      <li>✅ Relatórios de desempenho e resultados reais</li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: "3rem" }}>
                    <p style={{ marginBottom: "1rem" }}>
                      E tem mais: posso criar{" "}
                      <strong>campanhas de anúncios específicas</strong> para
                      impulsionar seu Perfil de Negócios Google, fazendo sua
                      empresa aparecer em destaque para quem está buscando
                      exatamente o que você oferece na sua região.
                    </p>

                    <p>
                      É <strong>tráfego pago + presença local</strong>{" "}
                      trabalhando juntos para multiplicar seus resultados.
                    </p>
                  </section>

                  <footer style={{ textAlign: "center" }}>
                    <h2 style={{ fontSize: "1.6rem", marginBottom: "1rem" }}>
                      Seus clientes já estão procurando
                    </h2>
                    <p style={{ marginBottom: "1rem" }}>
                      Você só precisa estar lá, <strong>da forma certa,</strong>{" "}
                      quando eles buscarem. Não deixe um perfil abandonado ou
                      mal configurado custar suas vendas.
                    </p>
                    <a
                      href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20otimiza%C3%A7%C3%A3o%20de%20Google%20meu%20neg%C3%B3cio%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "1rem 2rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        textDecoration: "none",
                        marginTop: "1rem",
                      }}
                    >
                      Solicite seu orçamento de GMN hoje
                    </a>
                  </footer>
                </article>
              </main>
            </article>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
};

export default MarketingDetail;
