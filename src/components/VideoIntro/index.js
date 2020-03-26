import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core"
import intro from "./assets/intro.mp4"
import CanvasItem from "../CanvasItem"
import { Modal } from "@material-ui/core"

// function useSized(size) {
//     const [documentWidth, setDocumentWidth] = useState(document.documentElement.clientWidth)

//     useEffect(() => {
//         setDocumentWidth(document.documentElement.clientWidth)
//     })

//     return (size * documentWidth) + "px";
// }

const useStyles = makeStyles(theme => ({
    fullscreen: {
        // top: 0,
        // left: 0,
        position: "relative",
        zIndex: 9999,
        height: "100vh",
        width: "100vw",
    },
    item: {
        // top: useSized(0.3),
        // left: useSized(0.3),
        // height: useSized(0.225),
        // width: useSized(0.4),
        height: "360px",
        width: "640px",
        transition: "height .8s, width .8s, top .8s, left .8s, opacity 1s",
        [theme.breakpoints.down("xs")]: {
            transition: "none",
        },
        "&:hover": {
            zIndex: 1000,
            opacity: 1
        },
        "&:not(:hover)": {
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
        backgroundColor: "black"
    },
    disbabledVideo: {
        [theme.breakpoints.down("xs")]: {
            display: "none"
        }
    }
}))

export default function VideoIntro(props) {
    const classes = useStyles()
    // useSized(2)

    return (
        <CanvasItem {...props} top={props.fullscreen ? "0" : "375px"} left={props.fullscreen ? "0" : "600px"} scrollSpeed={props.fullscreen ? 0 : 11} className={(props.fullscreen ? classes.fullscreen : classes.item)}>

        {/* <CanvasItem {...props} scrollSpeed={props.fullscreen ? 0 : 11} className={(props.fullscreen ? classes.fullscreen : classes.item)}> */}
            {props.fullscreen ?
                <Modal open={true} className={classes.disbabledVideo}>
                    <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.video} />
                </Modal> :
                <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.video} />}
        </CanvasItem>
    )
}