import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import background from "./assets/about.jpeg"

const useStyles = makeStyles(theme => ({
    container: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        "& .MuiTypography-root": {
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: theme.spacing(5),
            lineHeight: 1.1,
            color: theme.palette.text.primary
        },
        "& :last-child": {
            padding: theme.spacing(2.5, 0)
        }
    }
}))

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div>
                <Typography>I make films and images</Typography>
                <Typography>I'm based in Paris</Typography>
                <Typography>But no worries I move everywhere</Typography>
                <Typography>yo@remibesse.com</Typography>
            </div>
        </div>
    )
}