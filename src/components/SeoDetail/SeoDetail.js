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
} from "./SeoDetailStyled";
import { FaMoon, FaSun } from "react-icons/fa";

const SeoDetail = () => {
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
          src={require("../../assets/images/background/google-detail-background.jpg")}
          alt="Seo Detail"
        />
        <Overlay>
          <TitleContentImage>
            <h2>Google Ads & Perfil de Negócios Google</h2>
          </TitleContentImage>
        </Overlay>
      </ImageWrapper>
      <TextWrapper ref={textRef} isVisible={textIsVisible}>
        <Content ref={ref} className={isVisible ? "animate" : ""}>
          <ToogleWrapper>
            <ToggleButton onClick={toggleLightMode} darkMode={lightMode}>
              {lightMode ? (
                <FaMoon color="#5F61B5" />
              ) : (
                <FaSun color="#FFD700" />
              )}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <main
              id="seo-conteudo"
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
                  <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                    Google Ads: apareça quando seus clientes estão procurando
                    por você
                  </h1>

                  <p style={{ marginBottom: "1rem" }}>
                    Imagine aparecer no topo do Google exatamente quando alguém
                    busca pelo que você vende. Sem esperar meses por resultados
                    orgânicos, sem depender de redes sociais. Apenas você, no
                    momento certo, na frente da pessoa certa.
                  </p>

                  <p>
                    O Google Ads funciona, mas entre criar anúncios e gerar
                    resultados reais existe um abismo que muitos descobrem tarde
                    demais.
                  </p>
                </header>

                <section style={{ marginBottom: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    O problema que você provavelmente já enfrentou
                  </h2>

                  <p style={{ marginBottom: "1rem" }}>
                    Você cria uma campanha, define palavras-chave, escreve
                    anúncios, ativa tudo e espera. Os cliques aparecem, o
                    dinheiro sai, mas as vendas não vêm na proporção esperada.
                  </p>

                  <p style={{ marginBottom: "0.5rem" }}>
                    <strong>Sinais de que algo está errado:</strong>
                  </p>

                  <ul style={{ paddingLeft: "1.5rem" }}>
                    <li>Custo por clique altíssimo (R$ 5, R$ 10, R$ 15+)</li>
                    <li>Muitos cliques, mas poucas conversões</li>
                    <li>Orçamento diário que acaba em 2 horas</li>
                    <li>Anúncios aparecendo para buscas irrelevantes</li>
                    <li>Concorrentes sempre acima de você</li>
                  </ul>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
                    Por que Google Ads não é “criar anúncio e pronto”
                  </h2>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      1. Correspondência de palavras-chave
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Escolher “tênis de corrida” e aparecer para “como lavar
                      tênis” é desperdício de orçamento.
                    </p>
                    <p>
                      <strong>Solução:</strong> correspondência ampla, frase e
                      exata + palavras negativas.
                    </p>
                  </article>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      2. Quality Score
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Quality Score baixo aumenta o custo por clique.
                    </p>
                    <p>
                      <strong>Solução:</strong> campanhas granulares com
                      anúncios altamente relevantes.
                    </p>
                  </article>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      3. Landing pages que não convertem
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Enviar tráfego para uma homepage genérica gera cliques
                      desperdiçados.
                    </p>
                    <p>
                      <strong>Solução:</strong> alinhamento anúncio → busca →
                      landing page.
                    </p>
                  </article>

                  <article>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      4. Lances sem estratégia
                    </h3>
                    <p style={{ marginBottom: "0.5rem" }}>
                      Pagar caro sem considerar margem e ticket inviabiliza a
                      campanha.
                    </p>
                    <p>
                      <strong>Solução:</strong> cálculo de CAC + ajustes por
                      horário, dispositivo, localização e intenção.
                    </p>
                  </article>
                </section>

                <section style={{ marginBottom: "2.5rem" }}>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    Como trabalhamos com Google Ads
                  </h2>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      Fase 1: Diagnóstico Estratégico
                    </h3>
                    <ul style={{ paddingLeft: "1.5rem" }}>
                      <li>Palavras-chave com demanda real</li>
                      <li>Análise de concorrência</li>
                      <li>Cálculo do CAC máximo</li>
                      <li>Auditoria de site e páginas</li>
                    </ul>
                  </article>

                  <article style={{ marginBottom: "1.5rem" }}>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      Fase 2: Estruturação e lançamento
                    </h3>
                    <ul style={{ paddingLeft: "1.5rem" }}>
                      <li>Campanhas granulares</li>
                      <li>Anúncios com foco em conversão</li>
                      <li>Rastreamento correto de conversões</li>
                      <li>Palavras negativas desde o início</li>
                    </ul>
                  </article>

                  <article>
                    <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                      Fase 3: Otimização contínua
                    </h3>
                    <ul style={{ paddingLeft: "1.5rem" }}>
                      <li>Análise de termos de busca</li>
                      <li>Ajuste de lances</li>
                      <li>Testes A/B</li>
                      <li>Relatórios mensais</li>
                    </ul>
                  </article>
                </section>

                <section>
                  <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    Próximo passo
                  </h2>

                  <p style={{ marginBottom: "1rem" }}>
                    Se você quer campanhas estruturadas, previsíveis e focadas
                    em resultado, vamos conversar.
                  </p>

                  <a
                    id="btn_seo"
                    href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20campanhas%20de%20tr%C3%A1fego%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
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

export default SeoDetail;
