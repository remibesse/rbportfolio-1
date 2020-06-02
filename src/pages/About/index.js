import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Link, Grid} from "@material-ui/core"
import about from "./assets/about.mp4"
import Player from "../../components/Player"
import {motion} from "framer-motion"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "auto",
        display: "flex",
        alignItems: "center",
        "& .MuiTypography-root, & .MuiLink-root": {
            fontFamily: "'Archivo Black', sans-serif",
            textTransform: "uppercase",
            fontSize: theme.spacing(5.8),
            lineHeight: 1,
            color: theme.palette.text.primary,
            "@media (max-width: 932px)": {
                fontSize: theme.spacing(4.8),
            },
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(3.5),
            },
            "@media (max-width: 350px)": {
                fontSize: theme.spacing(2.5),
            },
            "@media (max-width: 1050px) and (orientation: landscape)": {
                fontSize: theme.spacing(4.8),
             },
            "@media (max-width: 950px) and (orientation: landscape)": {
                fontSize: theme.spacing(3.8),
             },
        },
        "& .MuiLink-root": {
            textDecoration: "none",
        }
    },
    email: {
        marginTop: "5%",
        display: "inline-block",
        color: "white",
        fontWeight: "bold",
        "&:after": {
            content: '""',
            display: "block",
            width: "100%",
            height: "2px",
            marginTop: theme.spacing(1),
            borderRadius: "4px",
            background: "#fff",
            transform: "scale(1)",
            transition: "transform .30s",
        },
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
        "@media (max-width: 1000px) and (orientation: landscape)": {
            display: "none",
        },
    },
    gridVideo:{
        "@media (max-width: 600px) and (pointer: coarse)": {
            display: "none",
        },
    },
    description: {
        margin: theme.spacing(6.2),
        "@media (max-width: 1000px) and (orientation: landscape)": {
            marginTop: theme.spacing(12.5),
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
                <Grid item md={4} style={{textAlign: "right", position: "relative"}} className={classes.gridVideo}>
                    <motion.div position={"relative"} size={"100%"}
                                variants={variants}
                                initial="initialVideo"
                                animate="animate"
                                exit="out"
                    >
                        <Player src={about} alt={"Portrait"} width="300" className={classes.video}/>
                    </motion.div>
                </Grid>
                <Grid item md={6} className={classes.description}>
                    <motion.div position={"relative"} size={"100%"}
                                variants={variants}
                                initial="initialDescription"
                                animate="animate"
                                exit="out"
                    >
                        <Typography>Remi Besse</Typography>
                        <Typography>Based in Paris</Typography>
                        <Typography>Film Director</Typography>
                        <Typography>& Photographer</Typography>
                        <Typography>Also run a</Typography>
                        <Typography>Photo revue</Typography>
                        <Typography>called scald</Typography>
                        <Link href="mailto:yo@remibesse.com" target="_blank" className={classes.email}>
                            <Typography> yo@remibesse.com</Typography>
                        </Link>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}

