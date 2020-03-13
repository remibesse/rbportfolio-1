import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import intro from "./assets/intro.mp4"

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "absolute",
        zIndex: "9999",
        height: "100vh",
        width: "100vw",
        transition: "all .8s",
        top: 0,
        left: 0,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
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
    const skipVideoTimeout = useRef()

    useEffect(() => {
        skipVideoTimeout.current = setTimeout(skipVideo, 6000);
        return () => clearTimeout(skipVideoTimeout.current)
    }, []);

    const skipVideo = () => {
        clearTimeout(skipVideoTimeout.current)

        wrapper.current.style.height = "360px"
        wrapper.current.style.width = "640px"
        wrapper.current.style.top = "39%"
        wrapper.current.style.left = "36%"
        wrapper.current.style.visibility = "hidden"
    }

    return (
        <div ref={wrapper} className={classes.wrapper}>
            <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.iframe} onClick={skipVideo} />
        </div>
    )
}