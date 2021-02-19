import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import TranslationProvider from 'providers/TranslationProvider';
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Footer from 'components/layout/Footer';
import theme from 'theme';
import './App.css';

const App = () => (
  <React.Suspense fallback={null}>
    <ThemeProvider theme={theme}>
      <TranslationProvider ns={['default']}>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </TranslationProvider>
    </ThemeProvider>
  </React.Suspense>
);

export default App;
