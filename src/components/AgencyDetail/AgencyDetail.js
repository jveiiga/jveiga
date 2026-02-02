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
} from "./AgencyDetailStyled";
import { FaMoon, FaSun } from "react-icons/fa";

const AgencyDetail = () => {
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
          src={require("../../assets/images/background/dev1-background.jpg")}
          alt="Agency Detail"
        />
        <Overlay>
          <TitleContentImage>
            <h2>
              <strong>Presença&nbsp;</strong>Digital
            </h2>
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
                id="site-empresarial"
                style={{
                  margin: "3rem auto",
                  maxWidth: "960px",
                }}
              >
                <header style={{ marginBottom: "2rem" }}>
                  <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    Por que sua empresa precisa de um site (mesmo que você ache
                    que não)
                  </h1>
                  <p>
                    Se sua empresa não está na internet, ela simplesmente não
                    existe para a maioria dos seus potenciais clientes.
                  </p>
                </header>

                <article>
                  <section style={{ marginBottom: "2rem" }}>
                    <p>
                      Pense comigo: quando foi a última vez que você procurou um
                      produto ou serviço sem antes fazer uma pesquisa rápida no
                      Google?
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      O Que você está perdendo agora mesmo
                    </h2>
                    <p>
                      Enquanto você lê isso, pessoas estão procurando exatamente
                      o que você oferece. Elas estão encontrando seus
                      concorrentes, não você.
                    </p>
                    <p>
                      Seus clientes já estão online. A questão não é se você
                      precisa estar lá, mas quanto dinheiro está deixando de
                      ganhar todos os dias sem presença digital.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Os benefícios reais de ter um site
                    </h2>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>
                        <strong>Credibilidade instantânea:</strong> um site
                        profissional gera confiança imediata.
                      </li>
                      <li>
                        <strong>Disponível 24/7:</strong> seu site trabalha por
                        você o tempo todo.
                      </li>
                      <li>
                        <strong>Vendedor mais barato:</strong> responde dúvidas
                        comuns sem consumir seu tempo.
                      </li>
                      <li>
                        <strong>Alcance ampliado:</strong> clientes de outras
                        cidades passam a te encontrar.
                      </li>
                      <li>
                        <strong>Controle da imagem:</strong> você define como
                        sua empresa é apresentada.
                      </li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      “Mas eu já tenho instagram...”
                    </h2>
                    <p>
                      Redes sociais são importantes, mas não são suas. Seu site
                      é seu território. Ninguém muda as regras, ninguém tira do
                      ar.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      O Custo Real de Não Ter um Site
                    </h2>
                    <p>
                      Quantos clientes você precisa ganhar para pagar um site?
                      Provavelmente menos de cinco. Quantos você já perdeu por
                      não ser encontrado?
                    </p>
                    <p>
                      Um site não é custo. É investimento. E se paga sozinho.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Não precisa ser complicado
                    </h2>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>Mostrar quem você é e o que faz</li>
                      <li>Transmitir confiança</li>
                      <li>Facilitar o contato</li>
                      <li>Estar disponível quando o cliente procurar</li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      A decisão é simples
                    </h2>
                    <p>
                      Ou você continua invisível para quem já procura seu
                      serviço, ou decide ser encontrado.
                    </p>
                    <p>Seus concorrentes já escolheram. E você?</p>
                  </section>

                  <footer style={{ marginTop: "2rem" }}>
                    <p style={{ marginBottom: "1rem" }}>
                      Pronto para ser encontrado pelos clientes certos? Vamos
                      conversar e colocar sua empresa no mapa digital.
                    </p>
                    <a
                      id="btn_agency"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20desenvolvimento%20de%20sites%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
                      style={{
                        display: "inline-block",
                        padding: "1rem 2rem",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        textDecoration: "none",
                        marginTop: "1rem",
                      }}
                    >
                      Solicite seu orçamento de sites hoje
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

export default AgencyDetail;
