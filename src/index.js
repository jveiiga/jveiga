import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  // Verifica se já foi carregado antes no localStorage
  const [loading, setLoading] = useState(() => {
    return localStorage.getItem('appLoaded') ? false : true;
  });

  useEffect(() => {
    if (!localStorage.getItem('appLoaded')) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('appLoaded', 'true'); // Marca que o app já carregou
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <React.StrictMode>
      {loading ? <LoadingScreen /> : <App />}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);


// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



