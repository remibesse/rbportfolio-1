import React from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core"
import {Typography} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    menu: {
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(24),
        zIndex: "1000",
        writingMode: "vertical-rl",
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        "@media (max-width: 768px) and (min-width: 601px)": {
            left: theme.spacing(12),
        },
        "@media (max-width: 600px)": {
            left: theme.spacing(12),
            top: theme.spacing(19),
        },
        "@media (max-width: 600px) and (pointer: coarse)": {
            left: theme.spacing(11),
            top: theme.spacing(18),
        },
        "& a": {
            fontSize: theme.spacing(4),
            textDecoration: "none",
        },
        "& .MuiTypography-root": {
            position: "absolute",
            fontSize: theme.spacing(4),
            color: theme.palette.text.primary,
            fontWeight: "bold",
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

export default function Nav() {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link to="/about">
                <Typography className={classes.about}>About</Typography>
            </Link>
            <Link to={{pathname: "/home", state: {intro: false}}}>
                <Typography className={classes.home}>Home</Typography>
            </Link>
        </div>
    )
}