import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTypography-root": {
            position: "fixed",
            left: "35%",
            zIndex: "9990",
            fontSize: theme.spacing(4),
            textTransform: "uppercase",
            fontWeight: "bold",
            top: theme.spacing(4),
            color: theme.palette.text.primary,
            textAlign: "center",
            [theme.breakpoints.down("sm")]: {
                fontSize: theme.spacing(3),
            }
        }
    }
}))


export default function Title() {
    const classes = useStyles()
    const texts = ["img", "entertainer", "hustler"];


    return (
        <div className={classes.root}>
            <Typography>Your favorite moviemaker</Typography>
        </div>
    )
}