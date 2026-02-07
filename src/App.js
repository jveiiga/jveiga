import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { Section } from "./styles/AppStyles";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { ContentWrapper } from "./indexStyled";

// Componentes das páginas
import Home from "./components/Home/Home";
import Social from "./components/Social/Social";
import Seo from "./components/Seo/Seo";
import Marketing from "./components/Marketing/Marketing";
// import MarketingTwo from './components/MarketingTwo/MarketingTwo';
import Agency from "./components/Agency/Agency";
// import AgencyTwo from './components/AgencyTwo/AgencyTwo';
import HomeDetail from "./components/HomeDetails/HomeDetail";
import SocialDetail from "./components/SocialDetail/SocialDetail";
import SeoDetail from "./components/SeoDetail/SeoDetail";
import AgencyDetail from "./components/AgencyDetail/AgencyDetail";
import Contact from "./components/Contact/Contact";
import ThankYou from "./components/ThankYou/ThankYou";
import NotFound from "./components/NotFound/NotFound";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import MarketingDetail from "./components/MarketingDetail/MaketingDetail";
import ChatButton from "./components/ChatBotButton/ChatBotButton";
import ChatModal from "./components/ChatBotButton/ChatModal";

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const timer = setTimeout(() => setShowContent(true), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isDetailPage = [
    "/home-detail",
    "/social-detail",
    "/seo-detail",
    "/agency-detail",
    "/marketing-detail",
    "/contact",
    "/thanks",
  ].includes(location.pathname);

  return (
    <>
      <GlobalStyles />
      <Header currentPath={location.pathname} />

      <Routes>
        {!isDetailPage ? (
          <Route
            path="/"
            element={
              <ContentWrapper className={showContent ? "show" : ""}>
                <Section id="home">
                  <Home />
                </Section>
                <Section id="web developer">
                  <Agency />
                </Section>
                <Section id="google">
                  <Seo />
                </Section>
                <Section id="facebook">
                  <Social />
                </Section>
                {/* <Section id="social"><MarketingTwo /></Section> */}
                <Section id="gmn">
                  <Marketing />
                </Section>
                {/* <Section id="agency"><AgencyTwo /></Section> */}
                <Section>
                  <Footer />
                </Section>
              </ContentWrapper>
            }
          />
        ) : (
          <>
            <Route path="/home-detail" element={<HomeDetail />} />
            <Route path="/social-detail" element={<SocialDetail />} />
            <Route path="/seo-detail" element={<SeoDetail />} />
            <Route path="/agency-detail" element={<AgencyDetail />} />
            <Route path="/marketing-detail" element={<MarketingDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thanks" element={<ThankYou />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isDetailPage && (
        <>
          <WhatsAppButton />
          <ScrollToTopButton />
          <ChatButton onClick={() => setOpen(true)} />
          <ChatModal open={open} onClose={() => setOpen(false)} />
        </>
      )}
    </>
  );
};

const AppWrapper = () => <App />;

export default AppWrapper;
