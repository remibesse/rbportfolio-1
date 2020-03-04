import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CanvasScroll from "../../components/canvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Nav from "../../components/Nav/index.js";
import Intro from "./assets/intro.mp4";
import accorhotel from "./assets/accorhotel.jpg";
import adidas from "./assets/adidas.jpg";
import budweiser from "./assets/budweiser.jpg";
import blue from "./assets/blue.jpg";
import cavani from "./assets/cavani.jpg";
import complex from "./assets/complex.jpg";
import faces from "./assets/faces.jpg";
import giveafuck from "./assets/giveafuck.jpg";
import havana from "./assets/havana.jpg";
import print1 from "./assets/print1.jpg";
import psgjordan from "./assets/psgjordan.jpg";
import sept from "./assets/sept.jpg";
import streets from "./assets/streets.jpg";
import stylist1 from "./assets/stylist1.jpg";
import stylist2 from "./assets/stylist2.jpg";
import vimsml from "./assets/vimsml.jpg";
import z from "./assets/z.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTypography-root": {
            position: "absolute",
            color: "white",
            fontSize: theme.spacing(3.6),
            textTransform: "uppercase",
            fontWeight: "bold"
        }
    }
}))


export default function Home() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Nav />
            <CanvasScroll canvasSize={{ x: 800, y: 1000 }} initialFocus={{ x: 200, y: 100 }}  >
                <CanvasItem top="120px" left="510px" zIndex={1}>
                    <img src={adidas} alt="adidas" style={{ height: "250px", position: "relative" }} />
                    <Typography style={{ top: "171px", left: "18px" }}>Adidas</Typography>
                    <Typography style={{ top: "200px", left: "39px" }}>Reboosted</Typography>
                </CanvasItem>
                <CanvasItem top="100px" left="1450px" zIndex={3}>
                    <img src={streets} alt="streets" style={{ height: "370px" }} />
                    <Typography style={{ top: "320px", left: "50px" }}>Streets</Typography>
                </CanvasItem>
                <CanvasItem top="240px" left="1620px" zIndex={11}>
                    <img src={complex} alt="complex" style={{ height: "350px" }} />
                    <Typography style={{ top: "300px", left: "20px" }}>Complex</Typography>
                </CanvasItem>
                <CanvasItem top="160px" left="2070px" zIndex={10}>
                    <img src={sept} alt="sept" style={{ height: "450px" }} />
                </CanvasItem>
                <CanvasItem top="550px" left="180px" zIndex={6}>
                    <img src={faces} alt="faces" style={{ height: "450px" }} />
                    <Typography style={{ top: "395px", left: "320px" }}>Faces</Typography>
                </CanvasItem>
                <CanvasItem top="400px" left="700px" zIndex={1}>
                    < ReactPlayer
                        playing
                        loop
                        url={Intro}
                        type="video/mp4"
                        width="700px"
                        height="100%"
                    />
                </CanvasItem>
                <CanvasItem top="680px" left="1500px" zIndex={10}>
                    <img src={giveafuck} alt="Give a fuck" style={{ height: "390px" }} />
                    <Typography style={{ top: "300px", left: "24px" }}>Give</Typography>
                    <Typography style={{ top: "327px", left: "25px" }}>A fuck</Typography>
                </CanvasItem>
                <CanvasItem top="730px" left="1980px" zIndex={6}>
                    <img src={stylist1} alt="Stylist" style={{ height: "420px" }} />
                </CanvasItem>
                <CanvasItem top="1100px" left="360px" zIndex={2}>
                    <img src={vimsml} alt="vimsml" style={{ height: "350px" }} />
                </CanvasItem>
                <CanvasItem top="890px" left="820px" zIndex={8}>
                    <img src={budweiser} alt="Budweiser Kings" style={{ height: "500px" }} />
                    <Typography style={{ top: "8px", left: "30px" }}>Budweiser</Typography>
                    <Typography style={{ top: "38px", left: "65px" }}>Kings</Typography>
                </CanvasItem>
                <CanvasItem top="1100px" left="1280px" zIndex={10}>
                    <img src={cavani} alt="Cavani" style={{ height: "300px" }} />
                </CanvasItem>
                <CanvasItem top="1230px" left="100px" zIndex={1}>
                    <img src={blue} alt="Blue" style={{ height: "480px" }} />
                </CanvasItem>
                <CanvasItem top="1450px" left="650px" zIndex={4}>
                    <img src={havana} alt="Havana" style={{ height: "480px" }} />
                    <Typography style={{ top: "23px", left: "100px" }}>Havana club</Typography>
                    <Typography style={{ top: "50px", left: "140px" }}>Noches</Typography>

                </CanvasItem>
                <CanvasItem top="1470px" left="1150px" zIndex={7}>
                    <img src={z} alt="Z" style={{ height: "400px" }} />
                </CanvasItem>
                <CanvasItem top="1350px" left="1700px" zIndex={5}>
                    <img src={psgjordan} alt="PSG Jordan" style={{ height: "350px" }} />
                </CanvasItem>
            </CanvasScroll>
        </div>
    )
}

