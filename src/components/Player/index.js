import React, {useState} from "react"
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Player(props) {
    const [videoLoaded, setVideoLoaded] = useState(false)
    const loaderSizes = 110

    const handleOnCanPlay = () => {
        setVideoLoaded(true)
        if (props.onCanPlay !== undefined) props.onCanPlay()
    }

    return (
        <div>
            <video {...props}
                   type="video/mp4"
                   preload="auto"
                   onCanPlay={handleOnCanPlay}
                   autoPlay muted loop
            />
            <CircularProgress size={loaderSizes} thickness={2} color="white" style={{
                position: "absolute",
                top: `calc(50% - ${loaderSizes / 2}px)`,
                left: `calc(50% - ${loaderSizes / 2}px)`,
                display: videoLoaded ? "none" : "initial"
            }}/>
        </div>
    )
}