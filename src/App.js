import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Section } from './styles/AppStyles';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Creative from './components/Creative/Creative';
import Corporate from './components/Corporate/Corporate';
import Social from './components/Social/Social';
import Seo from './components/Seo/Seo';
import Marketing from './components/Marketing/Marketing';
import MarketingTwo from './components/MarketingTwo/MarketingTwo';
import Agency from './components/Agency/Agency';
import AgencyTwo from './components/AgencyTwo/AgencyTwo';
import Footer from './components/Footer/Footer';
import { ContentWrapper } from './indexStyled';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import About from './components/About/About';

const App = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 50); // Pequeno delay para suavizar a transição
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <GlobalStyles />
      <Header />
      <ContentWrapper className={showContent ? 'show' : ''}>
        <Section id="home"><Home /></Section>
        {/* <Section id="creative"><About /></Section> */}
        {/* <Section id="creative"><Creative /></Section> */}
        {/* <Section id="corporate"><Corporate /></Section> */}
        <Section id="social"><Social /></Section>
        <Section id="seo"><MarketingTwo /></Section>
        <Section id="seo"><Seo /></Section>
        <Section id="marketing"><Marketing /></Section>
        <Section id="agency"><Agency /></Section>
        <Section id="agency"><AgencyTwo /></Section>
        <Section><Footer /></Section>
      </ContentWrapper>
      <ScrollToTopButton />
    </>
  );
}

export default App;
