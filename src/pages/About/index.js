import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, Grid } from "@material-ui/core"
import about from "./assets/about.mp4"
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
        fontSize: theme.spacing(5.8),
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
    annexText: {
        fontFamily: "'Space Mono', monospace",
        textTransform: "initial",
        fontSize: "0.37em",
        lineHeight: 1,
        color: theme.palette.text.primary,
        verticalAlign: "top",
        marginLeft: "4px",
        "@media (max-width: 1100px)": {
            fontSize: "0.47em",
        },
    },
    email: {
        marginTop: "5%",
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
        "&:after": {
            content: "''",
            height: "1px",
            borderRadius: "4px",
            position: "absolute",
            width: "100%",
            background: "white",
            bottom: "-2%",
            left: 0,
            transform: "scale(0)",
            transition: "transform .3s",
        },
        "&:hover:after": {
            transform: "scale(1)",
            "@media (pointer: coarse)": {
                display: "none",
            },
        },
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
                        <Player src={about} alt={"Portrait"} width="300" className={classes.video} />
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
                        <div>Remi Besse</div>
                        <div>Based in Paris</div>
                        <div>Film Director</div>
                        <div>& Photographer</div>
                        <div>Also run a</div>
                        <div>Photo revue</div>
                        <div><span>called scald</span><span className={classes.annexText}><Link className={classes.animationLink} href="https://scaldconnexion.org/" target="_blank" >scaldconnexion.org</Link></span></div>
                        <Link href="mailto:yo@remibesse.com" target="_blank" className={classes.email}>
                            <div>yo@remibesse.com</div>
                        </Link>
                        <div className={classes.annexText}>Representation: <Link className={classes.animationLink} href="https://iconoclast.tv/fr/remi-besse" target="_blank" >ICONOCLAST.TV</Link></div>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}
