import React from "react";
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CanvasItem from "../../components/CanvasItem";
// import VideoIntro from "../VideoIntro";
import Nav from "../../components/Nav/index";
import quatro from "./assets/quatro.png"

const useStyles = makeStyles(theme => ({
    wrapper: {
        position: "relative",
        background: "#f9f4f3",
    },
}))

export default function Home() {
    const classes = useStyles()

    return (
        <>
        <Nav />
        <div className={classes.wrapper}>
            <CanvasItem top="30px" left="100px" zIndex={1}>
                    <img src={quatro} alt="quatro" className={classes.img} style={{ height: "350px" }} />
            </CanvasItem>
            <CanvasItem top="50px" left="800px" zIndex={5}>
            <img src={quatro} alt="quatro" className={classes.img} style={{ height: "350px" }} />
            </CanvasItem> 
        </div>
        </>
    )
}