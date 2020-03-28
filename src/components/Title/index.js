import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: "center",
        position: "relative",
        "& .MuiTypography-h1": {
            width: "100%",
            display: "inline-block",
            textAlign: "left",
            position: "absolute",
            zIndex: "1000",
            fontSize: theme.spacing(4),
            textTransform: "uppercase",
            fontWeight: "bold",
            top: theme.spacing(4),
            color: theme.palette.text.primary,
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
    const flip = useRef(0)

    useEffect(() => {
        changeWordTimeout.current = setTimeout(
            () => {
                setIndex((index + 1) % wordsArray.length)
            },
            3000
        )
        return () => clearTimeout(changeWordTimeout.current)
    }, [index]);

    return (
        <div className={classes.root}>
            <Typography variant="h1">Your favorite <span ref={flip}>{wordsArray[index]}</span>er</Typography>
        </div>
    )
}