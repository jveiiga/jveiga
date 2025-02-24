import React, { useEffect } from 'react';
import aboutImage from '../../assets/images/background/about-background.jpeg';
import { AboutContent, AboutContentFour, AboutContentFourIam, AboutContentFourName, AboutContentFourText, AboutContentFourTitle, AboutContentOne, AboutContentThree, AboutContentTwo, AboutContentWrapper, AboutSession, AboutWrapper, Image, Overlay, Progress, ProgressBar, ProgressBarContainer, ProgressBarTitle, TitleContent } from './AboutStyled';

const About = () => {

    useEffect(() => {
        const handleScroll = () => {
            const progressBars = document.querySelectorAll('.progress');
            progressBars.forEach((bar) => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight;
                if (barPosition < screenPosition) {
                    bar.style.width = bar.getAttribute('data-progress') + '%';
                } else {
                    bar.style.width = '0'; // Resetar a largura para 0 ao sair da tela
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <AboutSession id="about">
            <AboutWrapper id="about-wrapper">
                <AboutContentWrapper>
                    <AboutContent>

                        <AboutContentOne>
                            <TitleContent>
                                <strong>Sobre&nbsp;</strong><br/>
                                <h2>Mim</h2>
                            </TitleContent>
                            <AboutContentTwo>
                                <ProgressBarContainer>
                                    <ProgressBarTitle>Design</ProgressBarTitle>
                                    <ProgressBar>
                                        <Progress className="progress" data-progress="100" />
                                    </ProgressBar>
                                </ProgressBarContainer>
                                <ProgressBarContainer>
                                    <ProgressBarTitle>Tráfego</ProgressBarTitle>
                                    <ProgressBar>
                                        <Progress className="progress" data-progress="100" />
                                    </ProgressBar>
                                </ProgressBarContainer>
                                <ProgressBarContainer>
                                    <ProgressBarTitle>Desenvolvimento</ProgressBarTitle>
                                    <ProgressBar>
                                        <Progress className="progress" data-progress="100" />
                                    </ProgressBar>
                                </ProgressBarContainer>
                            </AboutContentTwo>
                        </AboutContentOne>

                        <AboutContentThree>
                            <Image id="about-image" src={aboutImage} alt="Sobre o plano de fundo" />
                        </AboutContentThree>

                        <AboutContentFour>
                            <AboutContentFourIam><strong>Quem&nbsp;</strong><h2>Sou Eu</h2></AboutContentFourIam>
                            <AboutContentFourName><p>Jeferson Veiga</p></AboutContentFourName>
                            <AboutContentFourTitle><p>Desenvolvedor Web, Especialista em Trafego Pago e Branding</p></AboutContentFourTitle>
                            <AboutContentFourText><p>Transformo ideias em código, negócios em marcas e cliques em conversões. Como desenvolvedor web, construo experiências digitais. No tráfego pago e branding, crio estratégias que conectam marcas ao público certo. Tecnologia e criatividade, unidas para gerar impacto.</p></AboutContentFourText>
                        </AboutContentFour>

                    </AboutContent>
                </AboutContentWrapper>
            </AboutWrapper>
        </AboutSession>
    );
};

export default About;