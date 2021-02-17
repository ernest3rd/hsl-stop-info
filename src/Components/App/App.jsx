import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import TranslationProvider from "providers/TranslationProvider";
import Header from "components/layout/Header";
import Main from "components/layout/Main";
import Footer from "components/layout/Footer";
import "./App.css";

const theme = {
  colors: {
    primary: "#88ff88",
    secondary: "#8888ff",
    black: "#000000",
    white: "#ffffff",
    grey: "#888888",
  },
  font: {
    size: {
      h1: 40,
      h2: 25,
      body: 16,
      large: 25,
      small: 12,
    },
    weight: {
      bold: 700,
      normal: 400,
      thin: 200,
    },
    family: {
      heading: "Roboto",
      body: "Arial",
    },
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <TranslationProvider ns={["common"]}>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </TranslationProvider>
  </ThemeProvider>
);

export default App;
