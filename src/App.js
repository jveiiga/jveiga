
import React, { useEffect, useState } from "react";
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

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  const isDetailPage = [
    ...landingPaths,
    "/home-detail",
    "/contact",
    "/thanks",
    "/privacy-policy",
  ].includes(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => setShowContent(true), 50);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <GlobalStyles />
      <Header currentPath={location.pathname} />

      <Routes>
        <Route
          path="/"
          element={
            <ContentWrapper className={showContent ? "show" : ""}>
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

              <Section>
                <Footer />
              </Section>
            </ContentWrapper>
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
