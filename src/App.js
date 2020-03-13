import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import About from "./pages/About";
import cursor from "./assets/cursor.png";
import VideoIntro from "../src/components/VideoIntro"
import Nav from "../src/components/Nav";
import Title from "../src/components/Title";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const useStyles = makeStyles(theme => ({
  body: {
    cursor: "none",
    boxSizing: "border-box",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    background: "#202020",
  },
  "@global": {
    ".MuiButtonBase-root, .MuiTypography-root, video": {
      cursor: "none",
    }
  },
}))

export default function App() {
  const classes = useStyles()
  const cursorRef = useRef()
  const [mouseVisibility, setMouseVisibility] = useState("visible")

  const handleMouseMove = e => {
    if (e.target.tagName === "IFRAME") setMouseVisibility("hidden")
    else setMouseVisibility("visible")
    cursorRef.current.style.left = `${e.pageX - 148}px`
    cursorRef.current.style.top = `${e.pageY - 83}px`
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <HashRouter basename="portfolio">
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseVisibility("hidden")}
          onMouseEnter={() => setMouseVisibility("visible")}
        >
          <Helmet>
            <title>Remi Besse</title>
            <body className={classes.body}></body>
          </Helmet>
          <img ref={cursorRef}
            alt="cursor"
            src={cursor}
            width={300}
            className={classes.cursor}
            style={{ position: "absolute", pointerEvents: "none", zIndex: Number.MAX_SAFE_INTEGER, visibility: mouseVisibility }}
          />
          <VideoIntro />
          <Nav />
          <Title />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route path="/:title" component={Popup} /> */}

          </Switch>
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

