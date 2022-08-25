import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Link, Grid } from "@material-ui/core"
import about from "./assets/about.jpg"
import { motion } from "framer-motion"
import aboutBackground from "./assets/aboutbackground.jpg"

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage:`url(${aboutBackground})`,
        backgroundSize: "100% 100%",
        height: "100vh",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
        overflow: "hidden",
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#000"
        },
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
    smallerTypo: {
        fontSize: theme.spacing(3),
        "@media (max-width: 360px)": {
            fontSize: theme.spacing(2.6),
        },
        "@media (max-width: 300px)": {
            fontSize: theme.spacing(2.3),
        },
        "@media (max-width: 700px) and (orientation: landscape) and (pointer: coarse)": {
            fontSize: theme.spacing(2.7),
        },
    },
    typography: {
        fontFamily: "'Helvetica', sans-setif",
        textTransform: "uppercase",
        fontSize: theme.spacing(3.8),
        lineHeight: 1,
        color: "#000",
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
    },
    marginTop :{
        marginTop: "5%",
    },
    email: {
        display: "inline-block",
    },
    link: {
        position: "relative",
        "&:after": {
            content: '""',
            position: "absolute",
            display: "block",
            width: "100%",
            height: "1px",
            marginTop: theme.spacing(0.6),
            borderRadius: "4px",
            background: "#000",
            transform: "scale(1)",
            transition: "transform .30s",
        },
        "&:hover:after": {
            transform: "scale(0)",
        },
    },
    gridVideo: {
        "@media (max-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
    },
    description: {
        margin: theme.spacing(6.2)
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
                        <Link className={classes.link} href="https://iconoclast.tv/fr/remi-besse" target="_blank" >ICONOCLAST.TV</Link>
                        <div className={classes.smallerTypo}>
                        <div className={classes.marginTop}>Also run a</div>
                        <div>collective photo revue</div>
                        <div>called <Link className={classes.link} href="https://scaldconnexion.org/" target="_blank">scald</Link></div>
                        </div>
                        <Link href="mailto:enquiries@remibesse.com" target="_blank" className={`${classes.email} ${classes.marginTop}`}>
                        <div>enquiries@remibesse.com</div>
                        </Link>
                        <div className={`${classes.marginTop} ${classes.smallerTypo}`}>©2022 Remi Besse</div>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}
