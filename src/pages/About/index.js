import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import About from "./assets/about.mp4";
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            paddingTop: "50%"
        },
        [theme.breakpoints.between("sm", "md")]: {
            flexDirection: "column",
            paddingTop: "10%"
        },
        "& .MuiTypography-root": {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: theme.spacing(6.5),
            lineHeight: 1,
            color: theme.palette.text.primary,
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(4),
            },
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            "& .MuiTypography-root": {
                paddingTop: theme.spacing(6),
                [theme.breakpoints.down("sm")]: {
                    paddingTop: theme.spacing(4),
                },
            },
            "& span": {
                paddingBottom: theme.spacing(0.3),
                borderBottom: "2px solid white",
                "&:hover": {
                    borderBottom: "none"
                }
            }
        }
    },
    video: {
        transform: "rotate(-5deg)",
    },
    description: {
        padding: theme.spacing(8),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(6),
        },
    }
}))

export default function Home() {
    const classes = useStyles();


    return (
        <Fade in={true} timeout={800} >
            <div className={classes.root}>
                < ReactPlayer
                    playing
                    loop
                    url={About}
                    type="video/mp4"
                    width="300px"
                    height="100%"
                    className={classes.video}
                />
                <div className={classes.description}>
                    <Typography>Remi Besse</Typography>
                    <Typography>Based in Paris</Typography>
                    <Typography>Director +</Typography>
                    <Typography>Photographer</Typography>
                    <Typography>Also run a</Typography>
                    <Typography>Photo revue</Typography>
                    <Typography>called scald</Typography>
                    <Link href="mailto:yo@remibesse.com" target="_blank">
                        <Typography><span>yo@remibesse.com</span></Typography>
                    </Link>
                </div>
            </div>
        </Fade>
    )
}

