import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    root: {
        "& img": {
            width: "100%"
        }
    }
}))


export default function Image(props) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img {...props} onLoad={() => setImageLoaded(true)}
            style={{background: imageLoaded? "null":"black"}}/>
        </div>
    )
}