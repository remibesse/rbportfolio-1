import React from "react"
import {makeStyles} from "@material-ui/core"
import intro from "./assets/intro.mp4"
import CanvasItem from "../../CanvasItem"
import {Modal} from "@material-ui/core"
import Player from "../../Player"

const useStyles = makeStyles({
    fullscreen: {
        position: "relative",
        top: 0,
        left: 0,
        zIndex: 9999,
        height: "100vh",
        width: "100vw",
    },
    item: {
        zIndex: 1000,
        transition: "height .8s, width .8s, top .8s, left .8s, opacity 1s",
        "&:hover": {
            opacity: 1,
        },
        "&:not(:hover)": {
            opacity: .7,
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
})

export default function VideoIntro(props) {
    const classes = useStyles()

    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4
    const width = document.documentElement.clientWidth / scaler
    const height = document.documentElement.clientHeight / scaler
    const left = props.initialScroll.x / scaler
    const top = props.initialScroll.y / scaler

    return (
        <CanvasItem onClick={props.onClick}
                    top={props.fullscreen ? top : props.videoPositionY}
                    left={props.fullscreen ? left : props.videoPositionX}
                    width={props.fullscreen ? width : props.videoWidth}
                    height={props.fullscreen ? height : props.videoHeight}
                    scrollSpeed={10}
                    className={(props.fullscreen ? classes.fullscreen : classes.item)}>
            {props.fullscreen ?
                <Modal open={true}>
                    <Player src={intro}
                            onCanPlay={props.onCanPlay}
                            className={classes.video}
                            containerStyle={{position: "initial"}}/>
                </Modal> :
                <video src={intro} type="video/mp4" autoPlay muted loop className={classes.video}/>}
        </CanvasItem>
    )
}