import React from "react"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import { Helmet } from "react-helmet"
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Title from "./components/Title"
import CursorProvider from "./components/Cursor"
import "bootstrap/dist/css/bootstrap.min.css"
import Favicon from "./favicon.png"

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
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      cursor: "auto"
    }
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <ThemeProvider theme={darkTheme}>
      <CursorProvider>
        <Helmet>
          <link rel="icon" type="image/png" href={Favicon} />
          <title>Remi Besse</title>
          <body className={classes.body}></body>
        </Helmet>
        <HashRouter>
          <Nav />
          <Title />
          <Switch>
            <Redirect exact from="/" to={{ pathname: "/home", state: { intro: true } }} />
            <Route exact path="/home" render={props => <Home {...props.location.state} />} />
            <Route path="/project" render={props => <Home intro={false} />} />
            <Route exact path="/about" component={About} />
          </Switch>
        </HashRouter>
      </CursorProvider>
    </ThemeProvider>
  );
}

