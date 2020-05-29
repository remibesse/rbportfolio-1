import React from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core"
import {Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    menu: {
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(24),
        zIndex: 1000,
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        writingMode: "vertical-rl",
        "@media (max-width: 930px)": {
            left: theme.spacing(12),
            top: theme.spacing(21),
        },
        "@media (max-width: 600px) and (pointer: coarse)": {
            left: theme.spacing(11),
            top: theme.spacing(18),
        },
        "& a": {
            textDecoration: "none",
        },
        "& .MuiTypography-root": {
            position: "absolute",
            fontSize: theme.spacing(4),
            color: theme.palette.text.primary,
            transition: "all .2s",
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(3.5),
            },
            "@media (max-width: 600px) and (pointer: coarse)": {
                fontSize: theme.spacing(3.2),
            },
        },
        "& .MuiTypography-root:hover": {
            fontSize: theme.spacing(4.2),
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(3.5),
            },
            "@media (max-width: 600px) and (pointer: coarse)": {
                fontSize: theme.spacing(3.2),
            },
        }
    },
    typo: {
        fontFamily: "'Archivo Black', sans-serif",
    },
    about: {
        top: theme.spacing(-6),
        left: theme.spacing(0),
        "@media (max-width: 600px)": {
            top: theme.spacing(-4.5),
            left: theme.spacing(2)
        },
        "@media (max-width: 600px) and (pointer: coarse)": {
            left: theme.spacing(2),
            top: theme.spacing(-4),
        },
    },
    home: {
        top: theme.spacing(0),
        left: theme.spacing(-5),
        "@media (max-width: 600px)": {
            left: theme.spacing(-2.5),
        },
        "@media (max-width: 600px) and (pointer: coarse)": {
            left: theme.spacing(-3),
        },
    },
}))

export default function Nav(props) {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link to="/about">
                <Typography className={`${classes.about} ${classes.typo}`}>About</Typography>
            </Link>
            <Link to={{pathname: "/home", state: {intro: false}}}
                  onPointerDown={() => props.setResetScroll(true)}
                  onPointerUp={() => props.setResetScroll(false)}>
                <Typography className={`${classes.home} ${classes.typo}`}>Home</Typography>
            </Link>
        </div>
    )
}