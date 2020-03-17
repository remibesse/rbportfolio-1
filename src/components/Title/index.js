import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTypography-root": {
            position: "absolute",
            zIndex: "9990",
            width: "100%",
            fontSize: theme.spacing(4),
            textTransform: "uppercase",
            fontWeight: "bold",
            top: theme.spacing(4),
            color: theme.palette.text.primary,
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
                display: "none"
            }
        }
    }
}))

export default function Title() {
    const classes = useStyles()
    const [index, setIndex] = useState(0)
    const wordsArray = ["moviemak", "imgmak", "entertain", "hustl"];
    const changeWordTimeout = useRef()

    useEffect(() => {
        changeWordTimeout.current = setTimeout(
            () => setIndex((index + 1) % wordsArray.length),
            3000
        )
        return () => clearTimeout(changeWordTimeout.current)
    }, [index]);

    return (
        <div className={classes.root}>
            <Typography>Your favorite <span>{wordsArray[index]}</span>er</Typography>
        </div>
    )
}