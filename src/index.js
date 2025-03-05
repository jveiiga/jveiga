import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import AppWrapper from './App';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentPath = window.location.hash.replace('#', '');

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

    if (shouldSkipLoading) {
      setLoading(false);
      return;
    }

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