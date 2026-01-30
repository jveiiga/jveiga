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
  ListWrapper,
  ToogleWrapper,
} from "./SeoDetailStyled";
import { FaMoon, FaSun } from "react-icons/fa";

const SeoDetail = () => {
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
            <ToggleButton onClick={toggleDarkMode} darkMode={darkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </ToggleButton>
          </ToogleWrapper>
          <TextContent>
            <article id="seo-conteudo">
              <header
                style={{ maxWidth: "900px", margin: "auto" }}
              >
                <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                  Google Ads: apareça quando seus clientes estão procurando por
                  você
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

              <section
                id="problema"
                style={{ maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  O Problema que você provavelmente já enfrentou
                </h2>
                <p style={{ marginBottom: "1rem" }}>
                  Você cria uma campanha, define palavras-chave, escreve
                  anúncios, ativa tudo e... espera. Os cliques aparecem, o
                  dinheiro sai, mas as vendas não vêm na proporção esperada.
                </p>
                <p style={{ marginTop: "4rem", marginBottom: "0.5rem" }}>
                  <strong>Sinais de que algo está errado:</strong>
                </p>
                <ul style={{ textAlign: "start", paddingLeft: "1.5rem" }}>
                  <li>Custo por clique altíssimo (R$ 5, R$ 10, R$ 15+)</li>
                  <li>Muitos cliques, mas poucas conversões</li>
                  <li>Orçamento diário que acaba em 2 horas</li>
                  <li>Anúncios aparecendo para buscas irrelevantes</li>
                  <li>Concorrentes sempre acima de você</li>
                </ul>
              </section>

              <section
                id="porque-google-ads"
                style={{ maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  Por que google ads não é "criar anúncio e pronto"
                </h2>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    1. Correspondência de palavras-chave
                  </h3>
                  <p style={{ marginBottom: "1rem" }}>
                    Escolher "tênis de corrida" e ver anúncios para "como lavar
                    tênis" é desperdício de orçamento.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Solução:</strong> Estrutura de correspondências
                    (ampla, frase, exata) + lista de palavras negativas.
                  </p>
                </article>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    2. Quality score (a métrica que ninguém vê)
                  </h3>
                  <p style={{ marginBottom: "1rem" }}>
                    Quality score baixo aumenta o custo por clique.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Solução:</strong> Campanhas granulares com anúncios
                    ultra-relevantes para cada grupo de palavras.
                  </p>
                </article>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    3. Landing pages que não convertem
                  </h3>
                  <p style={{ marginBottom: "1rem" }}>
                    Mandar tráfego para a homepage genérica significa cliques
                    desperdiçados.
                  </p>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Solução:</strong> Análise de correspondência
                    anúncio-busca-landing page + otimização de páginas
                    específicas.
                  </p>
                </article>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    4. Lances que não fazem sentido
                  </h3>
                  <p style={{ marginBottom: "1rem" }}>
                    Pagar R$ 8 por clique quando o ticket médio é R$ 100 e
                    margem 30% não funciona.
                  </p>
                  <p>
                    <strong>Solução:</strong> cálculo de CAC máximo permitido +
                    ajuste de lances por dispositivo, horário, localização e
                    intenção de busca.
                  </p>
                </article>
              </section>

              <section
                id="como-trabalhamos"
                style={{ maxWidth: "900px", margin: "auto" }}
              >
                <h2
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "1rem",
                  }}
                >
                  Como Trabalhamos com Google Ads
                </h2>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 1: Diagnóstico Estratégico (Semana 1)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Palavras-chave com demanda real</li>
                    <li>Análise da concorrência e lances médios</li>
                    <li>Cálculo do CAC máximo permitido</li>
                    <li>Auditoria do site/landing pages</li>
                  </ul>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Entrega:</strong> Plano de campanha com projeção de
                    custos e resultados.
                  </p>
                </article>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 2: Estruturação e Lançamento (Semana 2-3)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Criação de estrutura de campanha granular</li>
                    <li>Redação de anúncios com gatilhos de conversão</li>
                    <li>Configuração de rastreamento de conversões</li>
                    <li>Listas de palavras negativas desde o dia 1</li>
                  </ul>
                  <p style={{ marginBottom: "1rem" }}>
                    <strong>Entrega:</strong> Campanhas ativas com monitoramento
                    diário nos primeiros 7 dias.
                  </p>
                </article>

                <article>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      marginTop: "1.5rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Fase 3: Otimização Contínua (Mensal)
                  </h3>
                  <ul style={{ marginBottom: "1rem", paddingLeft: "1.5rem" }}>
                    <li>Análise de termos de busca</li>
                    <li>Ajuste de lances por desempenho</li>
                    <li>Testes A/B de anúncios</li>
                    <li>Relatórios mensais com métricas importantes</li>
                  </ul>
                  <p>
                    <strong>Entrega:</strong> Relatório executivo + reunião de
                    alinhamento mensal.
                  </p>
                </article>
              </section>

              <section
                id="contato"
                style={{ maxWidth: "900px", margin: "auto" }}
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
                  Se você quer campanhas estruturadas, acompanhada de relatórios
                  e suporte, vamos conversar.
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
                  <a target="_blank" rel="noreferrer" href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20campanhas%20de%20tr%C3%A1fego%20no%20Google%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.">
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

export default SeoDetail;
