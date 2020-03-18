import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    title: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3.6),
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none"
    },
    hoverTitle : {
        fontSize: theme.spacing(6),
    }
}))

export default function ImageTitle(props) {
    const classes = useStyles()

    return (
        <div style={{...props.style, top: props.top, left: props.left }} className={ props.isHover ? classes.hoverTitle : classes.title}>
            {props.children}
        </div>
    )
}
