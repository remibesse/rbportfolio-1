import React from "react"
import { makeStyles } from "@material-ui/core"
import intro from "./assets/intro.mp4"
import CanvasItem from "../CanvasItem"

const useStyles = makeStyles(theme => ({
    fullscreen: {
        position: "relative",
        zIndex: 9999,
        height: "100vh",
        width: "100vw",
    },
    item: {
        height: "360px",
        width: "640px",
        transition: "height .8s, width .8s, top .8s, left .8s, opacity 1s",
        "&:hover": {
            zIndex: 1000,
            opacity: 1
        },
        "&:not(:hover)": {
            // zIndex: 10,
            opacity: .7
        },
    },
    video: {
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

    return (
        <CanvasItem {...props} top={props.fullscreen ? "0" : "375px"} left={props.fullscreen ? "0" : "600px"} scrollSpeed={props.fullscreen ? 0 : 11} className={(props.fullscreen ? classes.fullscreen : classes.item)}>
            <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.video} />
        </CanvasItem>
    )
}