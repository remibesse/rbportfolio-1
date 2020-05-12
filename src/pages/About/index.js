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
        "& .MuiTypography-root, & .MuiLink-root": {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: theme.spacing(5.8),
            lineHeight: 1,
            color: theme.palette.text.primary,
            "@media (max-width: 932px)": {
                fontSize: theme.spacing(4.8),
            },
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(3.5),
            },
        },
        "& .MuiLink-root": {
            textDecoration: "none",
        }
    },
    container: {
        height: "100%",
        "@media (max-width: 845px)": {
            paddingTop: theme.spacing(25),
        },
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
        position: "relative"
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
                  className={classes.container}
                  justify="center"
                  alignItems="center"
            >
                <Grid item md={4} style={{textAlign: "right", position: "relative"}}>
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
                        <Typography>Director +</Typography>
                        <Typography>Photographer</Typography>
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

