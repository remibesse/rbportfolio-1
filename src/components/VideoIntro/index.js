import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import intro from "./assets/intro.mp4"
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "absolute",
        zIndex: "9999",
        height: "100vh",
        width: "100vw",
        transition: "all 0.8s",
        top: 0,
        left: 0,
    },
    iframe: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        backgroundColor: "black",
    }
}))


export default function VideoIntro(props) {
    const classes = useStyles()
    const wrapper = useRef()

    useEffect(() => {
        setTimeout(() => {
            wrapper.current.style.height = "360px"
            wrapper.current.style.width = "640px"
            wrapper.current.style.top = "39%"
            wrapper.current.style.left = "36%"
            wrapper.current.style.visibility = "hidden"
        }, 1000);
        // return () => clearTimeout(timer);
    }, []);


    return (

        <div ref={wrapper} className={classes.wrapper}>
            <Link to="/" isActive={() => window.location.pathname === '/'} label="Home">
                <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.iframe}></video>
            </Link>
        </div>

    )
}