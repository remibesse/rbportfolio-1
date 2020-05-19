import React, {useState} from "react"
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        display: "inline-block",
        position: "relative",
        "& .MuiCircularProgress-colorPrimary": {
            color: "white"
        }
    }
})


export default function Player(props) {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const loaderSizes = 90
    const classes = useStyles()

    const handleOnCanPlay = () => {
        setVideoLoaded(true)
        if (props.onCanPlay !== undefined) props.onCanPlay()
    }

    return (
        <div className={classes.root} style={props.containerStyle}>
            <video {...props}
                   type="video/mp4"
                   onCanPlay={handleOnCanPlay}
                   autoPlay muted loop
            >
                Sorry, your browser doesn't support playing video.
            </video>
            <CircularProgress size={loaderSizes} thickness={1.5} style={{
                position: "absolute",
                top: `calc(50% - ${loaderSizes / 2}px)`,
                left: `calc(50% - ${loaderSizes / 2}px)`,
                display: videoLoaded ? "none" : "initial"
            }}
            />
        </div>
    )
}