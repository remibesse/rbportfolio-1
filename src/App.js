import React, {useState} from "react"
import {Route, Switch, useLocation, Redirect} from "react-router-dom"
import {Helmet} from "react-helmet"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Title from "./components/Title"
import CursorProvider from "./components/Cursor"
import "bootstrap/dist/css/bootstrap.min.css"
import Favicon from "./favicon.png"
import Css from "./style.css"
import {AnimatePresence} from "framer-motion"

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
})

export default function App() {
    const [resetScroll, setResetScroll] = useState(false)
    const location = useLocation()

    return (
        <ThemeProvider theme={darkTheme}>
            <CursorProvider>
                <Helmet>
                    <link rel="icon" type="image/png" href={Favicon}/>
                    <title>Remi Besse</title>
                    <meta
                        name="description"
                        content="Remi Besse is a photographer and moviemaker."
                    />
                    <body/>
                </Helmet>
                    <Nav setResetScroll={setResetScroll}/>
                    <Title/>
                    <AnimatePresence exitBeforeEnter>
                        <Switch location={location} key={location.pathname}>
                            <Redirect exact from="/" to={{pathname: "/home", state: {intro: true}}}/>
                            <Route exact path="/home"
                                   render={props => <Home {...props.location.state} reset={resetScroll}/>}/>
                            <Route path="/project" render={props => <Home intro={false} reset={resetScroll}/>}/>
                            <Route exact path="/about" component={About}/>
                        </Switch>
                    </AnimatePresence>
            </CursorProvider>
        </ThemeProvider>
    );
}

