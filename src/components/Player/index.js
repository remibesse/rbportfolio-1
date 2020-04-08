import React, {useState} from "react"
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiCircularProgress-colorPrimary": {
            color: "white"
        }
    }
}))


export default function Player(props) {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const loaderSizes = 110
    const classes = useStyles()


    const handleOnCanPlay = () => {
        setVideoLoaded(true)
        if (props.onCanPlay !== undefined) props.onCanPlay()
    }

    return (
        <div className={classes.root}>
            <video {...props}
                   type="video/mp4"
                   onCanPlay={handleOnCanPlay}
                   autoPlay muted loop
            />
            <CircularProgress size={loaderSizes} thickness={2} style={{
                position: "absolute",
                top: `calc(50% - ${loaderSizes / 2}px)`,
                left: `calc(50% - ${loaderSizes / 2}px)`,
                display: videoLoaded ? "none" : "initial"
            }}
            />
        </div>
    )
}