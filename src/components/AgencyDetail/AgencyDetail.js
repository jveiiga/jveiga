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
                id="trafego-pago"
                style={{
                  margin: "3rem auto",
                  maxWidth: "960px",
                }}
              >
                <header style={{ marginBottom: "2rem" }}>
                  <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
                    Tráfego Pago: clientes certos, no momento certo
                  </h1>
                  <p>
                    Anunciar não é gastar dinheiro. É investir com estratégia
                    para gerar vendas previsíveis.
                  </p>
                </header>

                <article>
                  <section style={{ marginBottom: "2rem" }}>
                    <p>
                      Todos os dias, pessoas entram no Instagram e Facebook
                      prontas para comprar. A diferença entre você e seus
                      concorrentes é simples: eles aparecem, você não.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      O erro da maioria das empresas
                    </h2>
                    <p>
                      Muitas empresas até anunciam, mas sem estratégia.
                      Campanhas genéricas, público errado e dinheiro
                      desperdiçado.
                    </p>
                    <p>
                      Tráfego pago sem planejamento não gera vendas. Gera
                      frustração.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      O que o tráfego pago bem feito entrega
                    </h2>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>
                        <strong>Visibilidade imediata:</strong> seu negócio
                        aparece desde o primeiro dia.
                      </li>
                      <li>
                        <strong>Público qualificado:</strong> anúncios para quem
                        realmente tem interesse.
                      </li>
                      <li>
                        <strong>Controle total:</strong> você decide quanto
                        investir e quando parar.
                      </li>
                      <li>
                        <strong>Escala:</strong> o que funciona pode ser
                        multiplicado.
                      </li>
                      <li>
                        <strong>Dados reais:</strong> decisões baseadas em
                        números, não achismo.
                      </li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      “Já tentei anunciar e não funcionou”
                    </h2>
                    <p>
                      O problema raramente é a plataforma. Normalmente é a
                      estratégia, a segmentação ou a mensagem errada.
                    </p>
                    <p>
                      Quando tudo está alinhado, o tráfego pago se paga — e
                      sobra.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Quanto custa não anunciar?
                    </h2>
                    <p>
                      Cada dia sem tráfego é um dia entregando clientes para o
                      concorrente.
                    </p>
                    <p>
                      Enquanto você espera, alguém está aparecendo exatamente
                      onde seu cliente está olhando.
                    </p>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      Tráfego pago não precisa ser complicado
                    </h2>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>Objetivo claro</li>
                      <li>Mensagem direta</li>
                      <li>Público bem definido</li>
                      <li>Acompanhamento e otimização contínua</li>
                    </ul>
                  </section>

                  <section style={{ marginBottom: "2rem" }}>
                    <h2 style={{ marginBottom: "1rem" }}>
                      A escolha é estratégica
                    </h2>
                    <p>
                      Ou você depende da sorte, ou constrói um fluxo constante
                      de clientes.
                    </p>
                    <p>
                      Negócio que cresce não espera ser descoberto. Ele aparece.
                    </p>
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
                      href="https://wa.me/5511915181487?text=Ol%C3%A1%2C%20vi%20que%20voc%C3%AA%20trabalha%20com%20desenvolvimento%20de%20sites%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
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
                      Solicite seu orçamento de sites hoje
                    </a>
                  </section>
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
