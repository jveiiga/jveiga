
import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import { Section } from "./styles/AppStyles";
import { ContentWrapper } from "./indexStyled";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

import Home from "./components/Home/Home";
import AgencyDetail from "./components/AgencyDetail/AgencyDetail";
import SeoDetail from "./components/SeoDetail/SeoDetail";
import SocialDetail from "./components/SocialDetail/SocialDetail";
import MarketingDetail from "./components/MarketingDetail/MaketingDetail";

import HomeDetail from "./components/HomeDetails/HomeDetail";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/ThankYou/ThankYou";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import NotFound from "./components/NotFound/NotFound";

import Agency from "./components/Agency/Agency";
import Seo from "./components/Seo/Seo";
import Social from "./components/Social/Social";
import Marketing from "./components/Marketing/Marketing";

import SharedOrbitalScene from "./components/SharedOrbitalScene/SharedOrbitalScene";

const landingPaths = [
    "/desenvolvimento-de-sites",
    "/google-ads",
    "/facebook-ads",
    "/perfil-da-empresa-google",
    "/agency-detail",
    "/seo-detail",
    "/social-detail",
    "/marketing-detail",
];

const sectionIds = [
    "home",
    "desenvolvimento-de-sites",
    "google",
    "facebook",
    "perfil-da-empresa-google",
    "footer",
];

const App = () => {
    const [showContent, setShowContent] = useState(false);
    const location = useLocation();

    const sceneProgress = useRef(0);
    const mouse = useRef({ x: 0, y: 0 });

    const isDetailPage = [
        ...landingPaths,
        "/home-detail",
        "/contact",
        "/thanks",
        "/privacy-policy",
    ].includes(location.pathname);

    // Controle global da rolagem e progresso da cena 3D
    useEffect(() => {
        window.scrollTo(0, 0);

        sceneProgress.current = 0;
        mouse.current = { x: 0, y: 0 };

        let animationFrame;

        const updateProgress = () => {
            const scrollPosition = window.scrollY;

            const positions = sectionIds.map((id) => {
                const element = document.getElementById(id);

                if (!element) return null;

                return (
                    element.getBoundingClientRect().top +
                    window.scrollY
                );
            });

            let currentSection = 0;

            for (let i = 0; i < positions.length - 1; i++) {
                const start = positions[i];
                const end = positions[i + 1];

                if (start === null || end === null) continue;

                if (scrollPosition >= start) {
                    const distance = end - start;

                    const sectionProgress =
                        distance > 0
                            ? Math.max(
                                0,
                                Math.min(
                                    (scrollPosition - start) / distance,
                                    1
                                )
                            )
                            : 0;

                    currentSection = i + sectionProgress;
                }
            }

            sceneProgress.current = Math.max(
                0,
                Math.min(currentSection, sectionIds.length - 1)
            );
        };

        const scheduleUpdate = () => {
            cancelAnimationFrame(animationFrame);

            animationFrame = requestAnimationFrame(updateProgress);
        };

        window.addEventListener("scroll", scheduleUpdate, {
            passive: true,
        });

        window.addEventListener("resize", scheduleUpdate);
        window.addEventListener("orientationchange", scheduleUpdate);
        window.addEventListener("load", scheduleUpdate);

        // Detecta mudanças na viewport mobile
        const viewport = window.visualViewport;

        viewport?.addEventListener("resize", scheduleUpdate);
        viewport?.addEventListener("scroll", scheduleUpdate);

        // Detecta alterações na altura das seções
        const resizeObserver = new ResizeObserver(scheduleUpdate);

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                resizeObserver.observe(element);
            }
        });

        updateProgress();

        const timer = setTimeout(() => {
            setShowContent(true);
            scheduleUpdate();
        }, 50);

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            window.removeEventListener("orientationchange", scheduleUpdate);
            window.removeEventListener("load", scheduleUpdate);

            viewport?.removeEventListener("resize", scheduleUpdate);
            viewport?.removeEventListener("scroll", scheduleUpdate);

            resizeObserver.disconnect();

            cancelAnimationFrame(animationFrame);
            clearTimeout(timer);
        };
    }, [location.pathname]);

    // Rastreamento global do mouse
    useEffect(() => {
        const handlePointerMove = (event) => {
            mouse.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -((event.clientY / window.innerHeight) * 2 - 1),
            };
        };

        const handlePointerLeave = (event) => {
            if (!event.relatedTarget) {
                mouse.current = { x: 0, y: 0 };
            }
        };

        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerout", handlePointerLeave);

        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
            window.removeEventListener("pointerout", handlePointerLeave);
        };
    }, []);

    return (
        <>
            <GlobalStyles />

            <Header currentPath={location.pathname} />

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            {/* CENA 3D GLOBAL */}
                            <div className="pointer-events-none fixed inset-0 z-[7]">
                                <SharedOrbitalScene
                                    mouse={mouse}
                                    progress={sceneProgress}
                                />
                            </div>

                            {/* CONTEÚDO DA PÁGINA */}
                            <ContentWrapper
                                className={showContent ? "show" : ""}
                            >
                                <Section id="home">
                                    <Home />
                                </Section>

                                <Section id="desenvolvimento-de-sites">
                                    <Agency />
                                </Section>

                                <Section id="google">
                                    <Seo />
                                </Section>

                                <Section id="facebook">
                                    <Social />
                                </Section>

                                <Section id="perfil-da-empresa-google">
                                    <Marketing />
                                </Section>

                                <Section id="footer">
                                    <Footer />
                                </Section>
                            </ContentWrapper>
                        </>
                    }
                />

                <Route
                    path="/desenvolvimento-de-sites"
                    element={<AgencyDetail />}
                />

                <Route path="/google-ads" element={<SeoDetail />} />

                <Route path="/facebook-ads" element={<SocialDetail />} />

                <Route
                    path="/perfil-da-empresa-google"
                    element={<MarketingDetail />}
                />

                {/* Compatibilidade com rotas antigas */}
                <Route path="/agency-detail" element={<AgencyDetail />} />
                <Route path="/seo-detail" element={<SeoDetail />} />
                <Route path="/social-detail" element={<SocialDetail />} />
                <Route path="/marketing-detail" element={<MarketingDetail />} />

                <Route path="/home-detail" element={<HomeDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/thanks" element={<ThankYou />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />

                <Route path="*" element={<NotFound />} />
            </Routes>

            {!isDetailPage && (
                <>
                    <WhatsAppButton />
                    <ScrollToTopButton />
                </>
            )}
        </>
    );
};

export default App;
