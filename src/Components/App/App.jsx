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
  <ThemeProvider theme={theme}>
    <TranslationProvider ns={['common']}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </TranslationProvider>
  </ThemeProvider>
);

export default App;
