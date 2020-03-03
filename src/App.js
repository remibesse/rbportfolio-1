import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import About from "./pages/About";
import cursor from "./cursor.svg";
import IntroVideo from "./pages/VideoIntro";

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const useStyles = makeStyles(theme => ({
  body: {
    background: "#242424",
    // cursor: `url("${cursor}"), auto`,
    // height: "20px",
    boxSizing: "border-box",
    padding: theme.spacing(0),
    margin: theme.spacing(0)
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter basename="portfolio">
        <div className="App">
          <Helmet>
            <title>Remi Besse</title>
            <body className={classes.body}></body>
          </Helmet>
          <Route exact path="/intro" component={IntroVideo} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

