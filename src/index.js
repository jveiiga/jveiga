import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppWrapper from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentPath = window.location.hash.replace('#', '');

    // Lista de rotas válidas
    const validPaths = [
      '/',
      '/home-detail',
      '/social-detail',
      '/seo-detail',
      '/agency-detail',
      '/contact',
      '/thanks',
    ];

    // Verifica se a rota atual é válida
    const isValidPath = validPaths.some((path) =>
      currentPath === path || currentPath.startsWith(path + '/')
    );

    // Se a rota não for válida, pule a tela de carregamento
    if (!isValidPath) {
      setLoading(false);
      return;
    }

    // Lista de rotas que devem pular a tela de carregamento
    const skipLoadingPaths = [
      '/home-detail',
      '/social-detail',
      '/seo-detail',
      '/agency-detail',
      '/contact',
      '/thanks',
    ];

    const shouldSkipLoading = skipLoadingPaths.some((path) =>
      currentPath === path || currentPath.startsWith(path + '/')
    );

    // Se a rota estiver na lista de pular carregamento, defina loading como false
    if (shouldSkipLoading) {
      setLoading(false);
      return;
    }

    // Caso contrário, exiba a tela de carregamento por um tempo
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Reduza o tempo para 100ms ou menos

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