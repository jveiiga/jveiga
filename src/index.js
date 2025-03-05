import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import AppWrapper from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  const [loading, setLoading] = useState(true); // Sempre inicia como true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Aguarda 5 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <LoadingScreen /> // Exibe a tela de carregamento
      ) : (
        <Router>
          <AppWrapper />
        </Router>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);
