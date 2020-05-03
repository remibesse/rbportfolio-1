import React, {useState} from "react"
import {Route, Switch, useLocation, Redirect} from "react-router-dom"
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
import Css from "./style.css"
import {AnimatePresence, AnimateSharedLayout} from "framer-motion"

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
    },
})

function Store({match, intro, reset}) {
    const {id} = match.params

    return (
        <div key="store">
            <AnimateSharedLayout>
                <Home intro={intro} reset={reset}/>
                {id && <Project id={id} key="item"/>}
            </AnimateSharedLayout>
        </div>
    )
}

export default function App() {
    const [resetScroll, setResetScroll] = useState(false)

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
                    <Switch>
                        <Redirect exact from="/" to={{pathname: "/home", state: {intro: true}}}/>
                        <Route exact path={["/project/:id", "/home"]}
                               render={props => <Store {...props.location.state} match={props.match}
                                                       reset={resetScroll}/>}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                </AnimatePresence>
            </CursorProvider>
        </ThemeProvider>
    )
}

