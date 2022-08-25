import React from "react"
import { Link, useLocation } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    menu: {
        position: "absolute",
        top: theme.spacing(17),
        left: theme.spacing(24),
        zIndex: 1000,
        textTransform: "uppercase",
        transform: "rotate(180deg)",
        writingMode: "vertical-rl",
        "@media (max-width: 1100px)": {
            left: theme.spacing(12),
            top: theme.spacing(21),
        },
        "@media (max-width: 640px) and (pointer: coarse)": {
            left: theme.spacing(11),
            top: theme.spacing(20),
        },
        "@media (max-width: 600px) and (min-width: 550px) and (pointer: coarse)": {
            left: theme.spacing(9),
            top: theme.spacing(20),
        },
        "@media (max-width: 320px) and (pointer: coarse)": {
            left: theme.spacing(9),
            top: theme.spacing(18),
        },
        "& a": {
            textDecoration: "none",
        },
        "& .MuiTypography-root": {
            position: "absolute",
            fontSize: theme.spacing(4),
            "&:hover":{
                fontSize: theme.spacing(4 * 1.05)
            },
            color: "#000",
            transition: "all .2s",
            "@media (max-width: 1000px) and (pointer: coarse)": {
                fontSize: theme.spacing(3.2),
                "&:hover":{
                    fontSize: theme.spacing(3.2 * 1.05)
                },
            },
            "@media (max-width: 640px)": {
                fontSize: theme.spacing(3.2),
                "&:hover":{
                    fontSize: theme.spacing(3.2 * 1.05)
                },
            }
        }
    },
    typo: {
        fontFamily: "'Archivo Black', sans-serif",
    },
    about: {
        top: theme.spacing(-8),
        left: theme.spacing(0),
        "@media (max-width: 640px)": {
            top: theme.spacing(-4.5),
            left: theme.spacing(2)
        },
        "@media (max-width: 1000px) and (pointer: coarse)": {
            top: theme.spacing(-4.5),
            left: theme.spacing(2)
        }
    },
    home: {
        top: theme.spacing(-2),
        left: theme.spacing(-5),
        "@media (max-width: 640px)": {
            top: theme.spacing(0),
            left: theme.spacing(-2.5),
        },
        "@media (max-width: 1000px) and (pointer: coarse)": {
            top: theme.spacing(0),
            left: theme.spacing(-2.5),
        }
    }
}))

export default function Nav(props) {
    const classes = useStyles()
    const fontStyle = { fontFamily: "'Archivo Black', sans-serif" }
    const fontStyle2 = { fontFamily: "'Space Mono', monospace" }
    const location = useLocation()

    return (
        <div className={classes.menu}>
            <Link to="/about">
                <Typography className={`${classes.about} ${classes.typo}`} style={location.pathname === "/about" ? fontStyle : fontStyle2}>About</Typography>
            </Link>
            <Link to={{ pathname: "/home" }}
                onPointerDown={() => props.setResetScroll(true)}
                onPointerUp={() => props.setResetScroll(false)}>
                <Typography className={`${classes.home} ${classes.typo}`} style={location.pathname === "/home" || location.pathname === "/" ? fontStyle : fontStyle2}>Home</Typography>
            </Link>
        </div>
    )
}