import React, {useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import { motion } from "framer-motion"

const useStyles = makeStyles({
    root: {
        height: "100%",
        "& img": {
            width: "100%"
        }
    }
})


export default function Image(props) {
    const [imageLoaded, setImageLoaded] = useState(false)
    const classes = useStyles()

    return (
        <div className={classes.root} style={{background: "radial-gradient(circle, #363636, black, 0,7)"}}>
            <motion.img {...props} onLoad={() => setImageLoaded(true)}/>
        </div>
    )
}