import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Route, Switch, useLocation} from "react-router-dom"
import {Helmet} from "react-helmet"
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import Home from "./pages/Home"
import About from "./pages/About"
import Nav from "./components/Nav"
import Project from "./components/Project"
import Title from "./components/Title"
import CursorProvider from "./components/Cursor"
import "bootstrap/dist/css/bootstrap.min.css"
import Favicon from "./favicon.png"
import {AnimatePresence, AnimateSharedLayout} from "framer-motion"

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
})

const useStyles = makeStyles(theme => ({
    body: {
        backgroundImage: "radial-gradient(circle, #363636, #1c1c1c, #000000)",
        backgroundSize: "100% 100%",
        height: "100vh",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        overflow: "hidden",
        "& .MuiTypography-root": {
            fontFamily: "Jost, Helvetica, Arial, sans-serif",
            textTransform: "uppercase",
            color: "#fff"
        }
    }
}))

function Projects({match, intro, reset}) {
    const {id} = match.params

    return (
        <div key="page/projects">
            <AnimateSharedLayout type="crossfade">
                <Home intro={id ? false : intro} reset={reset} scrollEnabled={!id}
                      style={id ? {pointerEvents: "none"} : {pointerEvents: "auto"}}/>
                {id && <Project id={id}/>}
            </AnimateSharedLayout>
        </div>
    )
}

export default function App() {
    const [resetScroll, setResetScroll] = useState(false)
    const location = useLocation()
    const lastSlash = location.pathname.indexOf("/", 1)
    const page = location.pathname.substring(0, lastSlash === -1 ? location.pathname.length : lastSlash).replace("/home", "/")
    const classes = useStyles()

    return (
        <ThemeProvider theme={darkTheme}>
            <CursorProvider>
                <Helmet>
                    <link rel="icon" type="image/png" href={Favicon}/>
                    <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,600;1,300&display=swap"
                          rel="stylesheet"/>
                    <title>Remi Besse</title>
                    <meta
                        name="author"
                        content="Victoire Baron <victoirebaron@hotmail.fr>"
                    />
                    <meta
                        name="description"
                        content="Remi Besse is a photographer and moviemaker."
                    />
                    <body className={classes.body}/>
                </Helmet>
                <Nav setResetScroll={setResetScroll}/>
                <Title/>
                <AnimatePresence exitBeforeEnter>
                    <Switch location={location} key={page}>
                        <Route exact path={["/home/:id", "/home", "/"]}
                               render={props => <Projects {...props.location.state}
                                                          match={props.match}
                                                          reset={resetScroll}/>}
                        />
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </AnimatePresence>
            </CursorProvider>
        </ThemeProvider>
    )
}

