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

import { Link } from "react-router-dom";
import { ButtonCTA } from "../Social/SocialStyled";

const SocialDetail = () => {
  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container darkMode={darkMode}>
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
            <ToggleButton onClick={toggleDarkMode} darkMode={darkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <article id="trafego-pago">
              <header
                style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}
              >
                <h1 style={{ fontSize: "2rem", marginBottom: "2rem" }}>
                  Meta Ads: Conquiste Clientes Onde Eles Passam Horas Por Dia
                </h1>
                <p style={{ marginBottom: "1rem" }}>
                  Seus clientes ideais estão no Facebook e Instagram agora.
                  Rolando o feed, assistindo Reels, checando Stories. Mas entre
                  alcançar essas pessoas e{" "}
                  <strong>fazê-las comprar de você</strong>, existe uma barreira
                  que a maioria das empresas não consegue ultrapassar.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  O problema não é falta de alcance. É alcançar as pessoas
                  erradas, com a mensagem errada, no momento errado. E descobrir
                  isso só depois de gastar milhares de reais em anúncios que
                  geraram curtidas, mas não vendas.
                </p>
              </header>

              <section
                id="problema"
                style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",

                    marginBottom: "2rem",
                  }}
                >
                  O Problema que você provavelmente já enfrentou
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Você cria uma campanha, escolhe público-alvo, escreve um
                  texto, coloca uma imagem bonita e... espera. As visualizações
                  aparecem. O dinheiro sai da conta. Mas as vendas? Não vêm na
                  proporção esperada.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  <strong>Os sinais de que algo está errado:</strong>
                </p>
                <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                  <li>Muito alcance, poucos cliques</li>
                  <li>Muitos cliques, poucas vendas</li>
                  <li>Custo por lead altíssimo (R$ 50, R$ 80, R$ 100+)</li>
                  <li>Leads que não respondem ou não têm interesse real</li>
                  <li>Orçamento que acaba sem retorno visível</li>
                  <li>Anúncios que param de funcionar após alguns dias</li>
                </ul>
              </section>

              <section
                id="porque-meta-ads"
                style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",

                    marginBottom: "2rem",
                  }}
                >
                  Por que meta ads não é "impulsionar post"
                </h2>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    1. Segmentação que parece boa mas é genérica
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>
                    Você acha que segmentou bem, mas incluiu milhões de pessoas
                    diferentes.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Nossa solução:</strong> Audiências estratificadas +
                    lookalike dos melhores clientes + segmentação baseada em
                    comportamento de compra.
                  </p>
                </article>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    2. Criativos que não param o scroll
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>
                    Imagens bonitas passam despercebidas em meio a centenas de
                    posts.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Nossa solução:</strong> Framework de criativos
                    testados + testes A/B de imagens, vídeos e formatos
                    (carrossel, Stories, Reels).
                  </p>
                </article>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    3. Campanha Única tentando fazer tudo
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>
                    Campanha genérica não funciona para todos os públicos.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Nossa solução:</strong> Funil completo ToFu, MoFu e
                    BoFu + remarketing estratégico para cada estágio.
                  </p>
                </article>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    4. Otimização para a métrica errada
                  </h3>
                  <p style={{ marginBottom: "0.5rem" }}>
                    Otimizar para curtidas ou alcance não gera vendas.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Nossa solução:</strong> Configuração correta de
                    eventos de conversão + otimização para a ação que realmente
                    importa.
                  </p>
                </article>
              </section>

              <section
                id="como-trabalhamos"
                style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",

                    marginBottom: "2rem",
                  }}
                >
                  Como trabalhamos com meta ads
                </h2>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 1: Diagnóstico Estratégico (Semana 1)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Análise do público atual</li>
                    <li>Pesquisa de concorrentes</li>
                    <li>Definição de avatares de cliente</li>
                    <li>Auditoria de Pixel e rastreamento</li>
                    <li>Análise de funil de conversão</li>
                  </ul>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Entrega:</strong> Estratégia documentada com
                    público-alvo, mensagens-chave e projeção de resultados.
                  </p>
                </article>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 2: Estruturação e Lançamento (Semana 2-3)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Estrutura de campanha por objetivo</li>
                    <li>
                      Desenvolvimento de criativos (imagens, vídeos, copy)
                    </li>
                    <li>
                      Configuração de públicos (salvos, lookalike, custom)
                    </li>
                    <li>Implementação/validação do Pixel</li>
                    <li>Configuração de eventos de conversão</li>
                  </ul>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Entrega:</strong> Campanhas ativas com no mínimo 3
                    variações criativas por público.
                  </p>
                </article>

                <article style={{ marginBottom: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 3: Otimização Contínua (Semanal)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Análise de fadiga criativa</li>
                    <li>Expansão de públicos com base em dados</li>
                    <li>Ajuste de orçamento para anúncios vencedores</li>
                    <li>Testes A/B de criativos, copies, ofertas e CTAs</li>
                    <li>Relatórios semanais com métricas acionáveis</li>
                  </ul>
                  <p>
                    <strong>Entrega:</strong> Relatório executivo semanal +
                    reunião quinzenal de alinhamento.
                  </p>
                </article>
              </section>

              <section
                id="contato"
                style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Próximo Passo
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Se você quer campanhas com funil completo, relatórios claros,
                  vamos conversar.
                </p>
                <a
                  href="https://jveiga.dev/#/contact"
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
                <p style={{ marginTop: "1rem" }}>Ou entre em contato direto:</p>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>📱</p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20campanhas%20de%20tr%C3%A1fego%20no%20Facebook%20Ads%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                  >
                    WhatsApp
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>📧</p>
                  <a href="mailto:mktweb.veiga@gmail.com?subject=Informa%C3%A7%C3%B5es%20sobre%20campanhas%20de%20tr%C3%A1fego%20no%20Google&body=Ol%C3%A1%2C%0A%0AVi%20que%20voc%C3%AA%20trabalha%20com%20campanhas%20de%20tr%C3%A1fego%20no%20Google%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%0A%0AObrigado.">
                    Email
                  </a>
                </div>
              </section>
            </article>
          </TextContent>
        </Content>
      </TextWrapper>
    </Container>
  );
};

export default SocialDetail;
