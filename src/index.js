import React, { useState, useEffect } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';
import AppWrapper from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const tagManagerArgs = {
  gtmId: 'GTM-MWM7NMR8'
};

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    TagManager.initialize(tagManagerArgs); // Inicializa o GTM

    const currentHash = window.location.hash.replace('#', ''); // Remove o '#'
    const currentPath = currentHash || '/'; // Se currentHash for vazio, assume a rota principal '/'

    // Verifica se a rota atual é a página inicial (/)
    const isHomePage = currentPath === '/';

    // Se não for a página inicial, pule a tela de carregamento
    if (!isHomePage) {
      setLoading(false);
      return;
    }

    // Se for a página inicial, exiba a tela de carregamento por um tempo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Tempo de exibição da tela de carregamento

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <HashRouter>
        {loading ? (
          <LoadingScreen />
        ) : (
          <AppWrapper />
        )}
      </HashRouter>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Root />);
} else {
  createRoot(rootElement).render(<Root />);
}