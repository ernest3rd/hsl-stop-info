import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import "./App.css";

const Title = styled.h1`
  ${({ theme }) => `
    font-size: ${theme.fontSizes.xl};
    color: ${theme.colors.primary};
  `}
`;

const theme = {
  colors: {
    primary: "#88ff88",
    secondary: "#8888ff",
  },
  fontSizes: {
    xs: "9px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "20px",
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
