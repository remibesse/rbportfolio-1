import React from "react"
import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    menu: {
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(24),
        zIndex: "1000",
        writingMode: "vertical-rl",
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        [theme.breakpoints.down("sm")]: {
            top: theme.spacing(14),
            left: theme.spacing(12),
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
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(3),
            },
        },
        "& .MuiTypography-root:hover": {
            fontSize: theme.spacing(4.2),
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(3.2),
            },
        }
    },
    about: {
        top: theme.spacing(-6),
        left: theme.spacing(0),
        [theme.breakpoints.down("sm")]: {
            top: theme.spacing(-4.5),
            left: theme.spacing(2)
        },
    },
    home: {
        top: theme.spacing(0),
        left: theme.spacing(-5),
        [theme.breakpoints.down("sm")]: {
            left: theme.spacing(-2.5),
        },
    },
}))

export default function Nav() {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link to="/about" >
                <Typography className={classes.about}>About</Typography>
            </Link>
            <Link to={{ pathname: "/home", state: { intro: false } }} >
                <Typography className={classes.home}>Home</Typography>
            </Link>
        </div>
    )
}