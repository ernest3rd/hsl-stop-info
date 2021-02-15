import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Footer from "../Layout/Footer";
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
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  </ThemeProvider>
);

export default App;
