import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'; // Alteração para importar de 'react-dom/client'
import App from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {loading ? (
        <LoadingScreen />
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
};

// Alteração aqui para usar 'createRoot' em vez de 'render'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);

