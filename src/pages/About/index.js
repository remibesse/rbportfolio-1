import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, Grid } from "@material-ui/core"
import about from "./assets/about.jpg"
import Player from "../../components/Player"
import { motion } from "framer-motion"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "scroll",
        display: "flex",
        alignItems: "center",
        "@media (max-width: 1000px)": {
            paddingTop: theme.spacing(2.1)
        },
        "@media (max-width: 630px) and (pointer: coarse)": {
            marginTop: theme.spacing(2.5)
        },
    },
    typography: {
        fontFamily: "'Archivo Black', sans-serif",
        textTransform: "uppercase",
        fontSize: theme.spacing(5),
        lineHeight: 1,
        color: theme.palette.text.primary,
        "@media (max-width: 1409px)": {
            fontSize: theme.spacing(5.3),
        },
        "@media (max-width: 1300px)": {
            fontSize: theme.spacing(4.8),
        },
        "@media (max-width: 1100px)": {
            fontSize: theme.spacing(4.2),
        },
        "@media (max-width: 1020px)": {
            fontSize: theme.spacing(4),
        },
        "@media (max-width: 990px)": {
            fontSize: theme.spacing(3.8),
        },
        "@media (max-width: 600px)": {
            fontSize: theme.spacing(3.5),
        },
        "@media (max-width: 360px)": {
            fontSize: theme.spacing(3),
        },
        "@media (max-width: 300px)": {
            fontSize: theme.spacing(2.5),
        },
        "@media (max-width: 700px) and (orientation: landscape) and (pointer: coarse)": {
            fontSize: theme.spacing(2.9),
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#fff"
        },
    },
    marginTop :{
        marginTop: "5%",
    },
    email: {
        display: "inline-block",
        color: "white",
        "&:hover:after": {
            transform: "scale(0)",
        },
    },
    video: {
        transform: "rotate(-5deg)",
        maxWidth: "85%",
        margin: theme.spacing(1.2),
        position: "relative",
        background: "radial-gradient(circle, #363636, black, 0,7)",
        "@media (max-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
        "@media (max-width: 1000px) and (orientation: landscape) and (pointer: coarse)": {
            display: "none",
        },
    },
    gridVideo: {
        "@media (max-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
    },
    description: {
        margin: theme.spacing(6.2)
    },
    animationLink: {
        position: "relative",
    }
}))


export default function About() {
    const classes = useStyles();

    const variants = {
        initialVideo: {
            opacity: 0,
            x: "4%"
        },
        initialDescription: {
            opacity: 0,
            x: "-4%"
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                ease: "easeOut",
                duration: "0.3"
            }
        },
        out: {
            opacity: 0,
            y: "20%",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    }

    return (
        <div key="page/about" className={classes.root}>
            <Grid container
                justify="center"
                alignItems="center"
            >
                <Grid item md={4} style={{ textAlign: "right", position: "relative" }} className={classes.gridVideo}>
                    <motion.div position={"relative"} size={"100%"}
                        variants={variants}
                        initial="initialVideo"
                        animate="animate"
                        exit="out"
                    >
                        <img src={about} alt="Portrait" width="300" />
                    </motion.div>
                </Grid>
                <Grid item md={6} className={classes.description}>
                    <motion.div position={"relative"} size={"100%"}
                        variants={variants}
                        initial="initialDescription"
                        animate="animate"
                        exit="out"
                        className={classes.typography}
                    >
                        <div>Representation</div>
                        <Link className={classes.animationLink} href="https://iconoclast.tv/fr/remi-besse" target="_blank" >ICONOCLAST.TV</Link>
                        <div className={classes.marginTop}>Also run a</div>
                        <div>collective photo revue</div>
                        <div>called<span className={classes.annexText}><Link className={classes.animationLink} href="https://scaldconnexion.org/" target="_blank" >scald</Link></span></div>
                        <Link href="mailto:enquiries@remibesse.com" target="_blank" className={`${classes.email} ${classes.marginTop}`}>
                            <div>enquiries@remibesse.com</div>
                        </Link>
                        <div className={classes.marginTop}>©2022 Remi Besse</div>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}
