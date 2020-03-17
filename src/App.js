import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Home from "./pages/Home";
import About from "./pages/About";
import cursor from "./assets/cursor.svg";
import cursorCenter from "./assets/cursor-center.svg";
import { Motion } from 'react-motion';
import Nav from "../src/components/Nav";
import Title from "../src/components/Title";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
})

const useStyles = makeStyles(theme => ({
  body: {
    boxSizing: "border-box",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    background: "#202020",
    [theme.breakpoints.down("sm")]: {
      cursor: "auto"
    }
  },
  "@global": {
    "*": {
      cursor: "none"
    },
    ".MuiButtonBase-root, .MuiTypography-root, video": {
      [theme.breakpoints.down("sm")]: {
        cursor: "pointer"
      }
    }
  },
  camcorderCursor: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}))

export default function App() {
  const classes = useStyles()
  const cursorRef = useRef()
  const [mouseX, setMouseX] = useState(-Number.MAX_SAFE_INTEGER)
  const [mouseY, setMouseY] = useState(-Number.MAX_SAFE_INTEGER)
  const [mouseVisibility, setMouseVisibility] = useState("visible")

  const handleMouseMove = e => {
    if (e.target.tagName === "IFRAME") setMouseVisibility("hidden")
    else setMouseVisibility("visible")
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseVisibility("hidden")}
          onMouseEnter={() => setMouseVisibility("visible")}
        >
          <Helmet>
            <title>Remi Besse</title>
            <body className={classes.body}></body>
          </Helmet>
          <Motion style={{ x: mouseX, y: mouseY }}>
            {({ x, y }) =>
              <img ref={cursorRef}
                alt="cursor"
                src={cursor}
                width={350}
                className={classes.camcorderCursor}
                style={{ position: "absolute", pointerEvents: "none", zIndex: Number.MAX_SAFE_INTEGER, visibility: mouseVisibility, willChange: "transform", transform: `translate3d(${x - 175}px, ${y - 99}px, 0)` }}
              />
            }
          </Motion>
          <Nav />
          <Title />
          <Switch>
            <Redirect exact from="/" to={{ pathname: "/home", state: { intro: true } }} />
            <Route exact path="/home" render={props => <Home {...props.location.state} />} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

