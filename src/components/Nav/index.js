import React from "react"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"
import { Link } from "react-router-dom"

const useStyles = makeStyles(theme => ({
    menu: {
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(24),
        zIndex: "9990",
        writingMode: "vertical-rl",
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        [theme.breakpoints.down("xs")]: {
            top: theme.spacing(14),
            left: theme.spacing(12),
        },
        "& a": {
            textDecoration: "none",
        },
        "& a:hover": {
            opacity: .8,
            textShadow: "2px 2px 4px black",
        },
        "& .MuiTypography-root": {
            position: "absolute",
            fontSize: theme.spacing(4),
            color: theme.palette.text.primary,
            fontWeight: "bold",
        }
    },
    about: {
        top: theme.spacing(-6),
        left: theme.spacing(0),
        [theme.breakpoints.down("sm")]: {
            left: theme.spacing(1),
        },
    },
    home: {
        top: theme.spacing(0),
        left: theme.spacing(-5)
    },
}))

export default function Nav(props) {
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