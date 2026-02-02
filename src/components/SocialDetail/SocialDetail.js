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
} from "./SocialDetailStyled";
import { FaMoon, FaSun } from "react-icons/fa";

const SocialDetail = () => {
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

  const toggleLightkMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <Container lightMode={lightMode}>
      <ImageWrapper ref={imageRef} isVisible={imageIsVisible}>
        <Image
          src={require("../../assets/images/background/social-background.jpg")}
          alt="Social Detail"
        />
        <Overlay>
          <TitleContentImage>
            <h2>Facebook&nbsp;</h2>
            <strong>Ads</strong>
          </TitleContentImage>
        </Overlay>
      </ImageWrapper>
      <TextWrapper ref={textRef} isVisible={textIsVisible}>
        <Content ref={ref} className={isVisible ? "animate" : ""}>
          <ToogleWrapper>
            <ToggleButton onClick={toggleLightkMode} lightMode={lightMode}>
              {lightMode ? (
                <FaMoon color="#5F61B5" />
              ) : (
                <FaSun color="#FFD700" />
              )}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <main
              id="trafego-pago"
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
                  <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
                    Meta Ads: Conquiste Clientes Onde Eles Passam Horas Por Dia
                  </h1>

                  <p style={{ marginBottom: "1rem" }}>
                    Seus clientes ideais estão no Facebook e Instagram agora.
                    Rolando o feed, assistindo Reels, checando Stories. Mas
                    entre alcançar essas pessoas e{" "}
                    <strong>fazê-las comprar de você</strong>, existe uma
                    barreira que a maioria das empresas não consegue
                    ultrapassar.
                  </p>

                  <p>
                    O problema não é falta de alcance. É alcançar as pessoas
                    erradas, com a mensagem errada, no momento errado.
                  </p>
                </header>

                <section id="problema" style={{ marginBottom: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                    O problema que você provavelmente já enfrentou
                  </h2>

                  <p style={{ marginBottom: "1rem" }}>
                    Você cria uma campanha, escolhe público-alvo, escreve um
                    texto, coloca uma imagem bonita e espera. As visualizações
                    aparecem. O dinheiro sai da conta. Mas as vendas não vêm.
                  </p>

                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Os sinais de que algo está errado:</strong>
                  </p>

                  <ul style={{ paddingLeft: "1.5rem" }}>
                    <li>Muito alcance, poucos cliques</li>
                    <li>Muitos cliques, poucas vendas</li>
                    <li>Custo por lead altíssimo</li>
                    <li>Leads sem interesse real</li>
                    <li>Orçamento gasto sem retorno</li>
                    <li>Anúncios que morrem rápido</li>
                  </ul>
                </section>

                <section
                  id="porque-meta-ads"
                  style={{ marginBottom: "2.5rem" }}
                >
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                    Por que Meta Ads não é “impulsionar post”
                  </h2>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      1. Segmentação genérica
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Você acha que segmentou bem, mas incluiu pessoas demais.
                    </p>
                    <p>
                      <strong>Solução:</strong> audiências estratégicas +
                      lookalike + comportamento de compra.
                    </p>
                  </article>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      2. Criativos que não param o scroll
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Imagens bonitas passam despercebidas.
                    </p>
                    <p>
                      <strong>Solução:</strong> criativos testados + testes A/B
                      contínuos.
                    </p>
                  </article>

                  <article>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      3. Otimização para a métrica errada
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Curtidas não pagam boletos.
                    </p>
                    <p>
                      <strong>Solução:</strong> foco total em conversão real.
                    </p>
                  </article>
                </section>

                <section id="contato">
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    Próximo passo
                  </h2>

                  <p style={{ marginBottom: "1rem" }}>
                    Se você quer campanhas com estratégia, dados e retorno,
                    vamos conversar.
                  </p>

                  <a
                    id="btn_social"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20campanhas%20de%20tr%C3%A1fego%20no%20Facebook%20Ads%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                    style={{
                      display: "inline-block",
                      padding: "1rem 2rem",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      textDecoration: "none",
                      marginTop: "1rem",
                    }}
                  >
                    Solicite seu plano de tráfego hoje
                  </a>
                </section>
              </article>
            </main>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
};

export default SocialDetail;
