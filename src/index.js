import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
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
      '/thanks'
    ];

    const shouldSkipLoading = skipLoadingPaths.some(path => 
      currentPath === path || currentPath.startsWith(path + '/')
    );

    if (shouldSkipLoading) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <Router>
        {loading ? (
          <LoadingScreen />
        ) : (
          <AppWrapper />
        )}
      </Router>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);