import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import Nav from "../../components/Nav/index";
import About from "./assets/about.mp4";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: "100vh",
        "& .MuiTypography-root": {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: theme.spacing(6.5),
            lineHeight: 1,
            color: theme.palette.text.primary,
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            "& .MuiTypography-root": {
                paddingTop: theme.spacing(6),
            },
            "& span": {
                paddingBottom: theme.spacing(0.3),
                borderBottom: "2px solid white",
            }
        }
    },
    wrapperVideo: {
        display: "flex",
        justifyContent: "flex-end",
    },
    video: {
        transform: "rotate(-5deg)"
    }
}))

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Nav />
            <Grid container className={classes.root}>
                <Grid container direction="row" justify="center" alignItems="center" spacing={8}>
                    <Grid item md={6} className={classes.wrapperVideo}>
                        < ReactPlayer
                            playing
                            loop
                            url={About}
                            type="video/mp4"
                            width="300px"
                            height="100%"
                            className={classes.video}
                        />
                    </Grid>
                    <Grid item md={6}>
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
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
