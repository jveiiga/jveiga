import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppWrapper from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentPath = window.location.hash.replace('#', '');

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);