import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import About from "./pages/About";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter basename="portfolio">
        <div className="App">
          <Helmet>
            <title>Remi Besse</title>
            <body style="background:#f9f4f3"></body>
          </Helmet>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

