import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/Styles/GlobalStyles";
import Theme from "../src/Styles/Theme";
import Router from "../src/Components/Router";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import "../src/Styles/common.scss";

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Header />
        <Router />
        <Footer />
      </>
    </ThemeProvider>
  );
};
