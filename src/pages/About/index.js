import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Link, Grid} from "@material-ui/core"
import About from "./assets/about.mp4"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        overflow: "auto",
    },
    container: {
        height: "100%",
        "@media (max-width: 845px)": {
            paddingTop: "200px",
        },
        "& .MuiTypography-root": {
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
            "& .MuiTypography-root": {
                paddingTop: theme.spacing(6),
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
        maxWidth: "85%",
        margin: "10px"
    },
    description: {
        margin: "50px"
    }
}))

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fade in={true} timeout={800}>
                <Grid container
                      className={classes.container}
                      justify="center"
                      alignItems="center"
                >
                    <Grid item md={4} style={{textAlign: "right"}}>
                        <video autoPlay loop muted width="300" className={classes.video}>
                            <source src={About} type="video/mp4" alt="Portrait"/>
                        </video>
                    </Grid>
                    <Grid item md={6} className={classes.description}>
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
            </Fade>
        </div>
    )
}

