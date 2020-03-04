import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
    menu: {
        position: "relative",
        top: theme.spacing(15),
        left: theme.spacing(28),
        writingMode: "vertical-rl",
        textOrientation: "sideways-right",
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        "& a": {
            textDecoration: "none",
        },
        "& .MuiTypography-root": {
            fontSize: theme.spacing(4),
            color: "#fff",
            fontWeight: "bold"
        }
    },
    about: {
        position:"absolute",
        top: theme.spacing(-6),
        left: theme.spacing(0)
    },
   home: {
        position:"absolute",
        top: theme.spacing(0),
        left: theme.spacing(-4)
    },
}))

export default function Nav() {
    const classes = useStyles()

    return (
        <div className={classes.menu}>
            <Link href="/about" isActive={() => window.location.pathname === '/about'}>
                <Typography className={classes.about}>About</Typography>
            </Link >
            <Link to="/" isActive={() => window.location.pathname === '/'} >
                <Typography className={classes.home}>Home</Typography>
            </Link>
        </div>
    )
}
