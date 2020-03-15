import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3.6),
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none"
    },
}))

export default function ImageTitle(props) {
    const classes = useStyles()

    return (
        <div className={classes.title} style={{ top: props.top, left: props.left }}>
            {props.children}
        </div>
    )
}
