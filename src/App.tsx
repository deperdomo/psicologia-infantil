import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes';
import ErrorBoundary from './components/ErrorBoundary';
import SkipNavigation from './components/SkipNavigation';

const App: React.FC = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <BrowserRouter>
        <SkipNavigation />
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
