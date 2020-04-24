import React, {useState, useEffect, useRef} from "react"
import {makeStyles} from "@material-ui/core"
import {Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        perspective: "1000px",
        left: "calc(50% - 475px / 2)",
        position: "absolute",
        zIndex: "1000",
        fontSize: theme.spacing(4),
        textTransform: "uppercase",
        fontWeight: "bold",
        top: theme.spacing(4),
        color: theme.palette.text.primary,
        "@media (max-width: 600px)": {
            fontSize: theme.spacing(2.3),
            left: "calc(50% - 250px / 2)",
        }
    },
    flipper: {
        position: "relative",
        transition: "transform .3s",
        transformStyle: "preserve-3d",
    },
    current: {
        transform: face => `rotateX(${face ? 0 : 180}deg)`,
        position: "absolute",
        top: "0px",
        left: "0px",
        backfaceVisibility: "hidden",
        transition: "transform .3s",
    },
    next: {
        position: "absolute",
        top: "0px",
        left: "0px",
        textAlign: "center",
        transition: "transform .3s",
        transform: face => `rotateX(${face ? 180 : 0}deg)`,
        backfaceVisibility: "hidden"
    }
}))

export default function Title() {
    const [tracker, setTracker] = useState({index: 0, face: true})
    const wordsArray = ["moviemaker", "imgmaker", "entertainer", "hustler"]
    const changeWordTimeout = useRef()
    const classes = useStyles(tracker.face)

    const string = Array.from("Your Favorite")

    const word = (index, face) => face ?
        wordsArray[index] :
        wordsArray[(index - 1 + wordsArray.length) % wordsArray.length]

    return (
        <Typography variant="h1" className={classes.root}>
            <span>Your favorite&nbsp;</span>
            <span className={classes.flipper}>
                <span className={classes.current}>{word(tracker.index, tracker.face)}</span>
                <span className={classes.next}>{word(tracker.index, !tracker.face)}</span>
            </span>
        </Typography>
    )
}