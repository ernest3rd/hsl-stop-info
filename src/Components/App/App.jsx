import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import TranslationProvider from 'providers/TranslationProvider';
import Header from 'components/layout/Header';
import Main from 'components/layout/Main';
import Footer from 'components/layout/Footer';
import theme from 'theme';
import './App.css';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
});

const App = () => (
  <React.Suspense fallback={null}>
    <ThemeProvider theme={theme}>
      <TranslationProvider ns={['default']}>
        <ApolloProvider client={client}>
          <Router>
            <Header />
            <Main />
            <Footer />
          </Router>
        </ApolloProvider>
      </TranslationProvider>
    </ThemeProvider>
  </React.Suspense>
);

export default App;
