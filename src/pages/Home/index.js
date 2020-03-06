import React, { useState } from "react";
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import CanvasScroll from "../../components/canvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Nav from "../../components/Nav/index.js";
import Popup from "../../components/Popup"
import intro from "../../components/VideoIntro/assets/intro.mp4";
import VideoIntro from "../../components/VideoIntro"
import complexVideo from "./assets/complex/complex.mp4";
import zoneb from "./assets/complex/zoneb.jpg";
import falcon from "./assets/complex/falcon.jpg";
import whitesmall from "./assets/complex/whitesmall.jpg";
import accorhotels from "./assets/accorhotels.jpg";
import adidas from "./assets/adidas.jpg";
import budweiser from "./assets/budweiser.jpg";
import blue from "./assets/blue.jpg";
import cavani from "./assets/cavani.jpg";
import complex from "./assets/complex/complex.jpg";
import faces from "./assets/faces/faces.jpg";
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
import fuck from "./assets/giveafuck/fuck.jpg"
import dimanche from "./assets/giveafuck/dimanche.jpg"
import b from "./assets/faces/b.jpg"
import duo from "./assets/faces/duo.jpg"
import face from "./assets/faces/face.jpg"
import portrait from "./assets/faces/portrait.jpg"
import quatro from "./assets/faces/quatro.jpg"
import havana1 from "./assets/havana/havana1.jpg"
import havana2 from "./assets/havana/havana2.jpg"
import streets1 from "./assets/streets/streets1.jpg"
import streets2 from "./assets/streets/streets2.jpg"
import streets3 from "./assets/streets/streets3.jpg"
import cursor from "../../assets/cursor.png";

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
    },
    rowScroll: {
        // width: "100vw",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
    },
    "@global": {
        ".MuiButtonBase-root": {
            cursor: `url(${cursor}) 64 36, auto`,
            // boxShadow: "2px 2px 6px #000"

        }
    }
}))

export default function Home(props) {
    const classes = useStyles()

    return (
        <>
            <Nav />
            <VideoIntro />
            <div className={classes.root}>
                <CanvasScroll canvasSize={{ x: 1200, y: 1100 }} initialFocus={{ x: 200, y: 100 }}  >
                    <CanvasItem top="190px" left="510px" zIndex={1}>
                        <Popup image={adidas} alt="Adidas" style={{ height: "250px" }}>
                            <ReactPlayer
                                url="https://vimeo.com/323459822"
                                controls
                                playing
                                loop
                                muted
                                width={1200}
                                height={700}
                            />
                            <div className={classes.caption}>
                                <Typography>Adidas reboosted</Typography>
                                <Typography>Directed by Remi Besse</Typography>
                                <Typography>Dop Ludovic Zuili</Typography>
                                <Typography>Soundtrack Le Ministere</Typography>
                            </div>
                        </Popup>
                        <Typography style={{ top: "171px", left: "18px", pointerEvents: "none" }}>Adidas</Typography>
                        <Typography style={{ top: "200px", left: "39px", pointerEvents: "none" }}>Reboosted</Typography>
                    </CanvasItem>
                    <CanvasItem top="100px" left="1430px" zIndex={3}>
                        <Popup image={streets} alt="Streets" style={{ height: "400px" }}>
                            <div className={classes.rowScroll}>
                                <img src={streets1} alt="Streets" style={{ height: "800px" }} />
                                <img src={streets2} alt="Streets" style={{ height: "800px" }} />
                                <img src={streets3} alt="Streets" style={{ height: "800px" }} />
                            </div>
                        </Popup>
                        <Typography style={{ top: "320px", left: "50px", pointerEvents: "none" }}>Streets</Typography>
                    </CanvasItem>
                    <CanvasItem top="240px" left="1600px" zIndex={9}>
                        <Popup image={complex} alt="Complex" style={{ height: "380px" }}>
                            <div className={classes.rowScroll}>
                                <ReactPlayer
                                    url={complexVideo}
                                    controls
                                    playing
                                    loop
                                    muted
                                />
                                <img src={zoneb} alt="Zone B" style={{ height: "770px" }} />
                                <img src={falcon} alt="Falcon" style={{ height: "770px" }} />
                                <img src={whitesmall} alt="White Small" style={{ height: "770px" }} />
                            </div>
                        </Popup>
                        <Typography style={{ top: "300px", left: "20px", pointerEvents: "none" }}>Complex</Typography>
                    </CanvasItem>
                    <CanvasItem top="200px" left="2040px" zIndex={4}>
                        <img src={sept} alt="sept" style={{ height: "480px" }} />
                    </CanvasItem>
                    <CanvasItem top="550px" left="180px" zIndex={6}>
                        <Popup image={faces} alt="Faces" style={{ height: "450px" }}>
                            <div className={classes.rowScroll}>
                                <img src={b} alt="b" style={{ height: "800px" }} />
                                <img src={quatro} alt="Quatro" style={{ height: "800px" }} />
                                <img src={portrait} alt="Portrait" style={{ height: "800px" }} />
                                <img src={face} alt="Face" style={{ height: "800px" }} />
                                <img src={duo} alt="Duo" style={{ height: "800px" }} />
                            </div>
                        </Popup>
                        <Typography style={{ top: "395px", left: "320px", pointerEvents: "none" }}>Faces</Typography>
                    </CanvasItem>

                    <CanvasItem top="475px" left="700px" zIndex={1}>
                        <ReactPlayer
                            url={intro}
                            type="video/mp4"
                            playing
                            loop
                            muted
                        />
                    </CanvasItem>

                    <CanvasItem top="680px" left="1470px" zIndex={3}>
                        <Popup image={giveafuck} alt="Give a fuck" style={{ height: "420px" }}>
                            <div className={classes.rowScroll}>
                                <img src={dimanche} alt="Dimanche" style={{ height: "800px" }} />
                                <img src={fuck} alt="Give a fuck" style={{ height: "800px" }} />
                            </div>
                        </Popup>
                        <Typography style={{ top: "300px", left: "24px", pointerEvents: "none" }}>Give</Typography>
                        <Typography style={{ top: "327px", left: "25px", pointerEvents: "none" }}>A fuck</Typography>
                    </CanvasItem>
                    <CanvasItem top="730px" left="1940px" zIndex={4}>
                        <img src={stylist1} alt="Stylist" style={{ height: "420px" }} />
                    </CanvasItem>
                    <CanvasItem top="450px" left="2300px" zIndex={5}>
                        <img src={print1} alt="Blue" style={{ height: "430px" }} />
                    </CanvasItem>
                    <CanvasItem top="1100px" left="360px" zIndex={2}>
                        <img src={vimsml} alt="vimsml" style={{ height: "380px" }} />
                    </CanvasItem>
                    <CanvasItem top="900px" left="820px" zIndex={8}>
                        <Popup image={budweiser} alt="Budweiser Kings" style={{ height: "550px" }}>
                            <ReactPlayer
                                url="https://vimeo.com/376855589/b811044f1f"
                                controls
                                playing
                                loop
                                muted
                                width={1200}
                                height={700}
                            />
                            <div className={classes.caption}>
                                <Typography>Budweiser Kings</Typography>
                            </div>
                        </Popup>

                        <Typography style={{ top: "8px", left: "30px", pointerEvents: "none" }}>Budweiser</Typography>
                        <Typography style={{ top: "38px", left: "65px", pointerEvents: "none" }}>Kings</Typography>
                    </CanvasItem>
                    <CanvasItem top="1150px" left="1280px" zIndex={5}>
                        <img src={cavani} alt="Cavani" style={{ height: "320px" }} />
                    </CanvasItem>
                    <CanvasItem top="1230px" left="100px" zIndex={1}>
                        <img src={blue} alt="Blue" style={{ height: "500px" }} />
                    </CanvasItem>
                    <CanvasItem top="1500px" left="670px" zIndex={4}>
                        <Popup image={havana} alt="Havana" style={{ height: "480px" }}>
                            <div className={classes.rowScroll}>
                            <img src={havana} alt="Havana" style={{ height: "800px" }} />
                                <ReactPlayer
                                    url="https://vimeo.com/388804671"
                                    controls
                                    playing
                                    loop
                                    muted
                                    muted
                                    width={1200}
                                    height={700}
                                />
                                <img src={havana1} alt="Havana" style={{ height: "800px" }} />
                                <img src={havana2} alt="Havana" style={{ height: "800px" }} />
                            </div>
                        </Popup>
                        <Typography style={{ top: "23px", left: "100px" , pointerEvents: "none" }}>Havana club</Typography>
                        <Typography style={{ top: "50px", left: "140px", pointerEvents: "none" }}>Noches</Typography>
                    </CanvasItem>
                    <CanvasItem top="1550px" left="1150px" zIndex={7}>
                        <img src={z} alt="Z" style={{ height: "500px" }} />
                    </CanvasItem>
                    <CanvasItem top="1500px" left="1700px" zIndex={5}>
                        <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
                    </CanvasItem>
                    <CanvasItem top="1200px" left="2100px" zIndex={2}>
                        <Popup image={accorhotels} alt="AccorHotels" style={{ height: "340px" }}>
                            <ReactPlayer
                                url="https://vimeo.com/345422526"
                                controls
                                playing
                                loop
                                muted
                                width={1200}
                                height={700}
                            />
                            <div className={classes.caption}>
                                <Typography>AccorHotels</Typography>
                                <Typography>Directed by Remi Besse</Typography>
                                <Typography>Agency Publicis</Typography>
                                <Typography>Production Standard Films</Typography>
                                <Typography>Dop Ludovic Zuili</Typography>
                            </div>
                        </Popup>
                        <Typography style={{ top: "250px", left: "300px", pointerEvents: "none" }}>AccorHotels</Typography>
                    </CanvasItem>
                    <CanvasItem top="1560px" left="2250px" zIndex={6}>
                        <img src={stylist2} alt="Stylist" style={{ height: "450px" }} />
                    </CanvasItem>
                </CanvasScroll>
            </div>
        </>
    )
}

