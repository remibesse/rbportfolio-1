import React from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import CanvasScroll from "../../components/canvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Nav from "../../components/Nav/index.js";
import Title from "../../components/Title/index.js";
import Intro from "./assets/intro.mp4";
import accorhotels from "./assets/accorhotels.jpg";
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
import Popup from "../../components/Popup"

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTypography-root": {
            position: "absolute",
            color: theme.palette.text.primary,
            fontSize: theme.spacing(3.6),
            textTransform: "uppercase",
            fontWeight: "bold"
        }
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.5),
            textTransform: "uppercase",
            lineHeight: 1.2,
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",

            }
        }
    }
}))


export default function Home(props) {
    const classes = useStyles()

    return (
        <>
            <Nav />
            <div className={classes.root}>
                <Title />
                <CanvasScroll canvasSize={{ x: 1000, y: 1100 }} initialFocus={{ x: 200, y: 100 }}  >
                    <CanvasItem top="190px" left="510px" zIndex={1}>
                        <Popup image={adidas} alt="Adidas" style={{ height: "250px", position: "relative" }}>
                            <ReactPlayer
                                controls
                                playing
                                loop
                                url="https://vimeo.com/323459822?embedparameter=value"
                            />
                            <div className={classes.caption}>
                                <Typography>Adidas reboosted</Typography>
                                <Typography>Directed by Remi Besse</Typography>
                                <Typography>Dop Ludovic Zuili</Typography>
                                <Typography>Soundtrack Le Ministere</Typography>
                            </div>
                        </Popup>
                    </CanvasItem>
                    <CanvasItem top="100px" left="1450px" zIndex={3}>
                        <img src={streets} alt="streets" style={{ height: "370px" }} />
                        <Typography style={{ top: "320px", left: "50px" }}>Streets</Typography>
                    </CanvasItem>
                    <CanvasItem top="240px" left="1620px" zIndex={11}>
                        <img src={complex} alt="complex" style={{ height: "350px" }} />
                        <Typography style={{ top: "300px", left: "20px" }}>Complex</Typography>
                    </CanvasItem>
                    <CanvasItem top="160px" left="1970px" zIndex={4}>
                        <img src={sept} alt="sept" style={{ height: "450px" }} />
                    </CanvasItem>
                    <CanvasItem top="550px" left="180px" zIndex={6}>
                        <img src={faces} alt="faces" style={{ height: "450px" }} />
                        <Typography style={{ top: "395px", left: "320px" }}>Faces</Typography>
                    </CanvasItem>
                    <CanvasItem top="470px" left="700px" zIndex={1}>
                        <ReactPlayer
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
                    <CanvasItem top="450px" left="2300px" zIndex={1}>
                        <img src={print1} alt="Blue" style={{ height: "430px" }} />
                    </CanvasItem>
                    <CanvasItem top="1100px" left="360px" zIndex={2}>
                        <img src={vimsml} alt="vimsml" style={{ height: "350px" }} />
                    </CanvasItem>
                    <CanvasItem top="960px" left="820px" zIndex={8}>
                        {/* <Typography style={{ top: "8px", left: "30px" }}>Budweiser</Typography>
                        <Typography style={{ top: "38px", left: "65px" }}>Kings</Typography> */}
                        <Popup image={budweiser} alt="Budweiser Kings" style={{ height: "500px" }}>
                            <ReactPlayer
                                controls
                                playing
                                loop
                                url="https://vimeo.com/376855589/b811044f1f"
                            />
                            <div className={classes.caption}>
                                <Typography>Budweiser Kings</Typography>
                            </div>
                        </Popup>
                    </CanvasItem>
                    <CanvasItem top="1100px" left="1280px" zIndex={10}>
                        <img src={cavani} alt="Cavani" style={{ height: "300px" }} />
                    </CanvasItem>
                    <CanvasItem top="1230px" left="100px" zIndex={1}>
                        <img src={blue} alt="Blue" style={{ height: "480px" }} />
                    </CanvasItem>
                    <CanvasItem top="1450px" left="650px" zIndex={4}>
                        {/* <Typography style={{ top: "23px", left: "100px" }}>Havana club</Typography>
                        <Typography style={{ top: "50px", left: "140px" }}>Noches</Typography> */}
                        <Popup image={havana} alt="Havana" style={{ height: "480px" }}>
                            <ReactPlayer
                                controls
                                playing
                                loop
                                url="https://vimeo.com/388804671"
                            />
                            <div className={classes.caption}>
                                <Typography>Havana Club - Noches</Typography>
                            </div>
                        </Popup>
                    </CanvasItem>
                    <CanvasItem top="1470px" left="1150px" zIndex={7}>
                        <img src={z} alt="Z" style={{ height: "400px" }} />
                    </CanvasItem>
                    <CanvasItem top="1350px" left="1700px" zIndex={5}>
                        <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
                    </CanvasItem>
                    <CanvasItem top="1200px" left="2100px" zIndex={2}>
                        <Popup image={accorhotels} alt="AccorHotels" style={{ height: "300px" }}>
                            <ReactPlayer
                                controls
                                playing
                                loop
                                url="https://vimeo.com/345422526"
                            />
                            <div className={classes.caption}>
                                <Typography>AccorHotels</Typography>
                                <Typography>Directed by Remi Besse</Typography>
                                <Typography>Agency Publicis</Typography>
                                <Typography>Production Standard Films</Typography>
                                <Typography>Dop Ludovic Zuili</Typography>
                            </div>
                        </Popup>
                    </CanvasItem>
                    <CanvasItem top="1560px" left="2200px" zIndex={6}>
                        <img src={stylist2} alt="Stylist" style={{ height: "400px" }} />
                    </CanvasItem>
                </CanvasScroll>
            </div>
        </>
    )
}

