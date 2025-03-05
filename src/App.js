import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Section } from './styles/AppStyles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Social from './components/Social/Social';
import Seo from './components/Seo/Seo';
import Marketing from './components/Marketing/Marketing';
import MarketingTwo from './components/MarketingTwo/MarketingTwo';
import Agency from './components/Agency/Agency';
import AgencyTwo from './components/AgencyTwo/AgencyTwo';
import Footer from './components/Footer/Footer';
import { ContentWrapper } from './indexStyled';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import HomeDetail from './components/HomeDetails/HomeDetail';
import SocialDetail from './components/SocialDetail/SocialDetail';
import SeoDetail from './components/SeoDetail/SeoDetail';
import AgencyDetail from './components/AgencyDetail/AgencyDetail';
import Contact from './components/Contact/Contact';
import ThankYou from './components/ThankYou/ThankYou';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 50); // Pequeno delay para suavizar a transição
    return () => clearTimeout(timer);
  }, []);

  const isDetailPage = ['/home-detail', '/social-detail', '/seo-detail', '/agency-detail', '/contact', '/thanks'].includes(location.pathname);

  return (
    <>
      <GlobalStyles />
      <Header currentPath={location.pathname} />
      {isDetailPage ? (
        <Routes>
          <Route path="/home-detail" element={<HomeDetail />} />
          <Route path="/social-detail" element={<SocialDetail />} />
          <Route path="/seo-detail" element={<SeoDetail />} />
          <Route path="/agency-detail" element={<AgencyDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thanks" element={<ThankYou />} />
        </Routes>
      ) : (
        <ContentWrapper className={showContent ? 'show' : ''}>
          <Routes>
            <Route path="/" element={
              <>
                <Section id="home"><Home /></Section>
                <Section id="social"><MarketingTwo /></Section>
                <Section id="social"><Social /></Section>
                <Section id="marketing"><Marketing /></Section>
                <Section id="seo"><Seo /></Section>
                <Section id="agency"><AgencyTwo /></Section>
                <Section id="agency"><Agency /></Section>
                <Section><Footer /></Section>
              </>
            } />
          </Routes>
        </ContentWrapper>
      )}
      {!isDetailPage && <ScrollToTopButton />}
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;