
import React, { useEffect, useRef, useState } from "react";
import {
    Container,
    Content,
    Overlay,
    TitleContentImage,
    ToggleButton,
    TextContent,
    ImageWrapper,
    TextWrapper,
    ToogleWrapper,
} from "./PrivacyPolicyStyled";
import { FaMoon, FaSun } from "react-icons/fa";
import { Image } from "./PrivacyPolicyStyled";

const PrivacyPolicy = () => {
    const [lightMode, setLightMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef();

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
            <ImageWrapper isVisible={isVisible}>
                <Image
                    src={require("../../assets/images/background/privacy-policy-background.jpg")}
                    alt="Agency Detail"
                />
                <Overlay>
                    <TitleContentImage>
                        <h2>
                            <strong>Política de</strong> Privacidade
                        </h2>
                    </TitleContentImage>
                </Overlay>
            </ImageWrapper>

            <TextWrapper isVisible={isVisible}>
                <Content ref={ref}>
                    <ToogleWrapper>
                        <ToggleButton
                            onClick={toggleLightMode}
                            lightMode={lightMode}
                            aria-label="Alternar tema"
                        >
                            {lightMode ? (
                                <FaMoon color="#5F61B5" />
                            ) : (
                                <FaSun color="#FFD700" />
                            )}
                        </ToggleButton>
                    </ToogleWrapper>

                    <TextContent>
                        <main
                            style={{
                                margin: "3rem auto",
                                maxWidth: "960px",
                            }}
                        >
                            <header style={{ marginBottom: "2rem" }}>
                                <h1>Política de Privacidade</h1>
                                <p>
                                    Última atualização: 15 de outubro de 2026.
                                </p>
                                <p>
                                    Esta Política de Privacidade explica como o site
                                    jveiga.dev coleta, utiliza e protege as informações
                                    dos usuários durante a navegação.
                                </p>
                            </header>

                            <section>
                                <h2>1. Coleta de informações</h2>
                                <p>
                                    Podemos coletar informações fornecidas voluntariamente
                                    pelo usuário por meio dos canais de contato, além de
                                    dados técnicos relacionados à navegação no site.
                                </p>
                            </section>

                            <section>
                                <h2>2. Uso das informações</h2>
                                <p>
                                    As informações coletadas podem ser utilizadas para
                                    responder a solicitações, melhorar a experiência de
                                    navegação, analisar o desempenho do site e manter sua
                                    segurança.
                                </p>
                            </section>

                            <section>
                                <h2>3. Cookies e tecnologias de rastreamento</h2>
                                <p>
                                    Este site pode utilizar cookies e tecnologias de
                                    análise, como ferramentas de métricas de acesso, para
                                    compreender a utilização das páginas e melhorar os
                                    serviços. A utilização efetiva dessas tecnologias
                                    depende das ferramentas instaladas no site.
                                </p>
                            </section>

                            <section>
                                <h2>4. Compartilhamento de dados</h2>
                                <p>
                                    Os dados poderão ser processados por fornecedores de
                                    serviços tecnológicos utilizados pelo site, como
                                    ferramentas de hospedagem e análise, quando aplicável.
                                    Não comercializamos informações pessoais.
                                </p>
                            </section>

                            <section>
                                <h2>5. Segurança das informações</h2>
                                <p>
                                    Adotamos medidas técnicas e organizacionais razoáveis
                                    para proteger as informações contra acesso não
                                    autorizado, perda, alteração ou divulgação indevida.
                                </p>
                            </section>

                            <section>
                                <h2>6. Direitos dos titulares</h2>
                                <p>
                                    Nos termos da Lei Geral de Proteção de Dados (LGPD),
                                    você pode solicitar informações sobre o tratamento
                                    dos seus dados, bem como sua correção, eliminação ou
                                    outros direitos previstos na legislação aplicável.
                                </p>
                            </section>

                            <section>
                                <h2>7. Links externos</h2>
                                <p>
                                    O site pode conter links para páginas de terceiros.
                                    Não somos responsáveis pelas práticas de privacidade
                                    adotadas por esses sites.
                                </p>
                            </section>

                            <section>
                                <h2>8. Alterações nesta política</h2>
                                <p>
                                    Esta política poderá ser atualizada periodicamente.
                                    A versão mais recente estará disponível nesta página.
                                </p>
                            </section>

                            <section>
                                <h2>9. Contato</h2>
                                <p>
                                    Para dúvidas ou solicitações relacionadas à
                                    privacidade e aos dados pessoais, entre em contato
                                    pelo canal de atendimento disponibilizado no site.
                                </p>
                            </section>
                        </main>
                    </TextContent>
                </Content>
            </TextWrapper>
        </Container>
    );
};

export default PrivacyPolicy;
