import React, { useState, useEffect, useRef } from "react";
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
        // overflow: "hidden",
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
    // const [inProp, setInProp] = useState(false);
    // const [transition, setTransition] = useState();
    const wrapper = useRef()

    useEffect(() => {
        setTimeout(() => {
        // wrapper.current.style.visibility= "hidden"
        // wrapper.current.style.background = "white"
        wrapper.current.style.height = "360px"
        wrapper.current.style.width = "640px"
        wrapper.current.style.top = "31.8%"
        wrapper.current.style.left = "31%"
        wrapper.current.style.visibility= "hidden"
        }, 1000);
        // return () => clearTimeout(timer);
    }, []);


    return (
        <div ref={wrapper} className={classes.wrapper}>
            <Link to="/" label="Home">
            <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.iframe} ></video>
            </Link>
        </div>
    )
}