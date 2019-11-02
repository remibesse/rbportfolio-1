import React, {useState, useEffect} from "react"
import {makeStyles} from "@material-ui/core"
import intro from "./assets/intro.mp4"
import CanvasItem from "../../CanvasItem"
import {Modal} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    fullscreen: {
        top: 0,
        left: 0,
        position: "relative",
        zIndex: 9999,
        height: "100vh",
        width: "100vw",
    },
    item: {
        transition: "height .8s, width .8s, top .8s, left .8s, opacity 1s",
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
    }
}))

export default function VideoIntro(props) {
    const classes = useStyles()

    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4

    const width = document.documentElement.clientWidth / scaler
    const height = document.documentElement.clientHeight / scaler

    const videoPosition = 40 * scaler
    const videoSize = 36 * scaler
    const restScreen = document.documentElement.clientWidth - videoSize
    const initialScroll = {x: videoPosition - restScreen / 2, y: 0}
    const left = initialScroll.x / scaler
    const top = initialScroll.y / scaler

    return (
        <CanvasItem {...props} top={props.fullscreen ? top : 19}
                    left={props.fullscreen ? left : 40}
                    width={props.fullscreen ? width : 36}
                    height={props.fullscreen ? height : 20} scrollSpeed={11}
                    className={(props.fullscreen ? classes.fullscreen : classes.item)}>
            {props.fullscreen ?
                <Modal open={true}>
                    <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.video}/>
                </Modal> :
                <video src={intro} type="video/mp4" preload="auto" autoPlay muted loop className={classes.video}/>}
        </CanvasItem>
    )
}