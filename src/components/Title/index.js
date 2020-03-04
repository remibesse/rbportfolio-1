import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root:{
        "& .MuiTypography-root":{
            position: "fixed",
            left: "40%",
            zIndex: "9999",
            fontSize: theme.spacing(4),
            textTransform: "uppercase",
            fontWeight: "bold",
            top: theme.spacing(4)
        }
    }
}))

export default function Title() {
const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography>Your favorite moviemaker</Typography>
        </div>
    )
}