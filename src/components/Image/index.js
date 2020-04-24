import React, {useState} from "react"
import CircularProgress from "@material-ui/core/CircularProgress";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        position: "relative",
        "& .MuiCircularProgress-colorPrimary": {
            color: "white"
        },
        "& img": {
            width: "100%"
        }
    }
}))


export default function Image(props) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const loaderSizes = 50
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img {...props} onLoad={() => setImageLoaded(true)}/>
            <CircularProgress size={loaderSizes} thickness={2} style={{
                position: "absolute",
                top: `calc(50% - ${loaderSizes / 2}px)`,
                left: `calc(50% - ${loaderSizes / 2}px)`,
                display: imageLoaded ? "none" : "initial",
            }}
            />
        </div>
    )
}