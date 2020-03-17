import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from "@material-ui/core";
import CanvasScroll from "../../components/CanvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Popup from "../../components/Popup";
import ImageTitle from "../../components/ImageTitle"
import VideoIntro from "../../components/VideoIntro";
import Carousel from "../../components/carousel";
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
import fuck from "./assets/giveafuck/fuck.jpg";
import dimanche from "./assets/giveafuck/dimanche.jpg";
import b from "./assets/faces/b.jpg";
import duo from "./assets/faces/duo.jpg";
import face from "./assets/faces/face.jpg";
import portrait from "./assets/faces/portrait.jpg";
import quatro from "./assets/faces/quatro.jpg";
import havana1 from "./assets/havana/havana1.jpg";
import havana2 from "./assets/havana/havana2.jpg";
import streets1 from "./assets/streets/streets1.jpg";
import streets2 from "./assets/streets/streets2.jpg";
import streets3 from "./assets/streets/streets3.jpg";

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
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
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        },
    }
}))

export default function Home(props) {
    const classes = useStyles()

    const skipIntroTimeout = useRef()
    const [intro, setIntro] = useState(props.intro !== undefined ? props.intro : true)

    useEffect(() => {
        skipIntroTimeout.current = setTimeout(() => setIntro(false), 6000)
        window.addEventListener("keydown", handleKeyDown)
        return () => clearTimeout(skipIntroTimeout.current)
    }, [])

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape")
            setIntro(false)
    }

    return (
        <CanvasScroll scrollSpeed={(intro ? 0 : 14)} className={classes.root}>
            <VideoIntro fullscreen={intro} onClick={() => setIntro(false)} />
            <CanvasItem top="85px" left="350px" scrollSpeed={12} className={classes.item}>
                <Popup image={adidas} alt="Adidas" height="260px">
                    <div className={classes.wrapper}>
                        <ReactPlayer
                            url="https://vimeo.com/323459822"
                            controls
                            playing
                            loop
                            muted
                            width={1200}
                            height={700}
                            className={classes.reactPlayer}
                        />
                        <div className={classes.caption}>
                            <Typography>Adidas reboosted</Typography>
                            <Typography>Directed by Remi Besse</Typography>
                            <Typography>Dop Ludovic Zuili</Typography>
                            <Typography>Soundtrack Le Ministere</Typography>
                        </div>
                    </div>
                </Popup>
                <ImageTitle top="171px" left="18px">Adidas</ImageTitle>
                <ImageTitle top="200px" left="39px">Reboosted</ImageTitle>
            </CanvasItem>
            <CanvasItem top="0px" left="1330px" scrollSpeed={13} className={classes.item}>
                <Popup image={streets} alt="Streets" height="400px">
                    <Carousel>
                        <div>
                            <img src={streets1} alt="Streets" />
                        </div>
                        <div>
                            <img src={streets2} alt="Streets" />
                        </div>
                        <div>
                            <img src={streets3} alt="Streets" />
                        </div>
                    </Carousel>
                </Popup>
                <ImageTitle top="320px" left="50px">Streets</ImageTitle>
            </CanvasItem>
            <CanvasItem top="140px" left="1500px" scrollSpeed={19} className={classes.item}>
                <Popup image={complex} alt="Complex" height="380px">
                    <Carousel>
                        <ReactPlayer
                            url={complexVideo}
                            controls
                            playing
                            loop
                            muted
                            style={{ display: "inline-block" }}
                            height="100%"
                        />
                        <img src={zoneb} alt="Zone B" />
                        <img src={falcon} alt="Falcon" />
                        <img src={whitesmall} alt="White Small" />
                    </Carousel>
                </Popup>
                <ImageTitle top="300px" left="20px" >Complex</ImageTitle>
            </CanvasItem>
            <CanvasItem top="50px" left="1940px" scrollSpeed={14} className={classes.item}>
                <img src={sept} alt="sept" style={{ height: "520px" }} />
            </CanvasItem>
            <CanvasItem top="450px" left="0px" scrollSpeed={16} className={classes.item}>
                <Popup image={faces} alt="Faces" height="500px">
                    <Carousel>
                        <img src={b} alt="Face" />
                        <img src={quatro} alt="Quatro" />
                        <img src={face} alt="Face" />
                        <img src={portrait} alt="Portrait" />
                        <img src={duo} alt="Duo" />
                    </Carousel>
                </Popup>
                <ImageTitle top="395px" left="320px">Faces</ImageTitle>
            </CanvasItem>
            <CanvasItem top="580px" left="1350px" scrollSpeed={13} className={classes.item}>
                <Popup image={giveafuck} alt="Give a fuck" height="420px">
                    <Carousel>
                        <img src={dimanche} alt="Give a fuck" />
                        <img src={fuck} alt="Share more consume less" />
                    </Carousel>
                </Popup>
                <ImageTitle top="300px" left="24px">Give</ImageTitle>
                <ImageTitle top="327px" left="25px">A Fuck</ImageTitle>
            </CanvasItem>
            <CanvasItem top="630px" left="1840px" scrollSpeed={17} className={classes.item}>
                <img src={stylist1} alt="Stylist" style={{ height: "420px" }} />
            </CanvasItem>
            <CanvasItem top="350px" left="2200px" scrollSpeed={15} className={classes.item}>
                <img src={print1} alt="Print" style={{ height: "430px" }} />
            </CanvasItem>
            <CanvasItem top="1060px" left="180px" scrollSpeed={11} className={classes.item} style={{ zIndex: 1 }}>
                <img src={vimsml} alt="vimsml" style={{ height: "380px" }} />
            </CanvasItem>
            <CanvasItem top="820px" left="680px" scrollSpeed={18} className={classes.item}>
                <Popup image={budweiser} alt="Budweiser Kings" height="550px">
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
                <ImageTitle top="8px" left="30px">Budweiser</ImageTitle>
                <ImageTitle top="38px" left="65px">Kings</ImageTitle>
            </CanvasItem>
            <CanvasItem top="1050px" left="1190px" scrollSpeed={15} className={classes.item}>
                <img src={cavani} alt="Cavani" style={{ height: "320px" }} />
            </CanvasItem>
            <CanvasItem top="1190px" left="-90px" scrollSpeed={10} className={classes.item}>
                <img src={blue} alt="Blue" style={{ height: "550px" }} />
            </CanvasItem>
            <CanvasItem top="1480px" left="530px" scrollSpeed={14} className={classes.item}>
                <Popup image={havana} alt="Havana" height="480px">
                    <Carousel>
                        <ReactPlayer
                            url="https://vimeo.com/388804671"
                            controls
                            playing
                            loop
                            muted
                            width="100%"
                        />
                        <img src={havana} alt="Havana" />
                        <img src={havana1} alt="Havana" />
                        <img src={havana2} alt="Havana" />
                    </Carousel>
                </Popup>
                <ImageTitle top="23px" left="100px">Havana Club</ImageTitle>
                <ImageTitle top="50px" left="140px">Noches</ImageTitle>
            </CanvasItem>
            <CanvasItem top="1450px" left="1050px" scrollSpeed={17} className={classes.item}>
                <img src={z} alt="Z" style={{ height: "500px" }} />
            </CanvasItem>
            <CanvasItem top="1400px" left="1600px" scrollSpeed={15} className={classes.item}>
                <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
            </CanvasItem>
            <CanvasItem top="1100px" left="2000px" scrollSpeed={12} className={classes.item} >
                <Popup image={accorhotels} alt="AccorHotels" height="340px">
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
                <ImageTitle top="250px" left="300px">AccorHotels</ImageTitle>
            </CanvasItem>
            <CanvasItem top="1500px" left="2150px" scrollSpeed={16} className={classes.item}>
                <img src={stylist2} alt="Stylist" style={{ height: "450px" }} />
            </CanvasItem>
        </CanvasScroll >
    )
}

