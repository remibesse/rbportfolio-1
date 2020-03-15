import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton } from "@material-ui/core";
import CanvasScroll from "../../components/CanvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Popup from "../../components/Popup";
import ImageTitle from "../../components/ImageTitle"
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import intro from "../../components/VideoIntro/assets/intro.mp4";
import VideoIntro from "../../components/VideoIntro";
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
    scrollRow: {
        width: "100vw",
        height: theme.spacing(100),
        textAlign: "center",
        display: "block",
        whiteSpace: "nowrap",
        padding: "50px 0 70px 0",
        position: "relative",
        "& img, #player": {
            maxHeight: "100%",
            maxWidth: "100%",
            alignItems: "center",
            display: "inline-block",
            objectFit: "cover",
        },
    },
    item: {
        "&:hover": {
            opacity: 1,
            zIndex: 1000,
            transition: "opacity 1s",
        },
        "&:not(:hover)": {
            opacity: .7,
            transition: "opacity 1s"
        },
    },
    arrowIcon: {
        position: "absolute",
        display: "block",
        left: "0",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
}))



export default function Home(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <VideoIntro />
            <CanvasScroll initialFocus={{ x: 100, y: 100 }} scrollSpeed={14} style={{height: "100vh"}}>
                <CanvasItem top="185px" left="450px" scrollSpeed={12} className={classes.item}>
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
                <CanvasItem top="100px" left="1430px" scrollSpeed={13} className={classes.item}>
                    <Popup image={streets} alt="Streets" height="400px">

                        <div className={classes.scrollRow}>
                            <img src={streets1} alt="Streets" />
                            <img src={streets2} alt="Streets" />
                            <img src={streets3} alt="Streets" />
                        </div>
                        <IconButton className={classes.arrowIcon}>
                            <KeyboardArrowRightIcon fontSize="large" aria-label="ChevronRightIcon" />
                        </IconButton>
                    </Popup>
                        <ImageTitle top="320px" left="50px">Streets</ImageTitle>
                </CanvasItem>
                <CanvasItem top="240px" left="1600px" scrollSpeed={19} className={classes.item}>
                    <Popup image={complex} alt="Complex" height="380px">
                        <div className={classes.scrollRow}>
                            <img src={zoneb} alt="Zone B" />
                            <ReactPlayer
                                url={complexVideo}
                                controls
                                playing
                                loop
                                muted
                                style={{ display: "inline-block" }}
                                height="100%"
                            />
                            <img src={falcon} alt="Falcon" />
                            <img src={whitesmall} alt="White Small" />
                        </div>
                        <IconButton className={classes.arrowIcon} >
                            <KeyboardArrowRightIcon fontSize="large" aria-label="ChevronRightIcon" />
                        </IconButton>
                    </Popup>
                    <ImageTitle top="300px" left="20px" >Complex</ImageTitle>
                </CanvasItem>
                <CanvasItem top="150px" left="2040px" scrollSpeed={14} className={classes.item}>
                    <img src={sept} alt="sept" style={{ height: "520px" }} />
                </CanvasItem>
                <CanvasItem top="550px" left="100px" scrollSpeed={16} className={classes.item}>
                    <Popup image={faces} alt="Faces" height="500px">
                        <div className={classes.scrollRow}>
                            <img src={b} alt="b" />
                            <img src={quatro} alt="Quatro" />
                            <img src={face} alt="Face" />
                            <img src={portrait} alt="Portrait" />
                            <img src={duo} alt="Duo" />
                        </div>
                        <IconButton className={classes.arrowIcon}>
                            <KeyboardArrowRightIcon fontSize="large" aria-label="ChevronRightIcon" />
                        </IconButton>
                    </Popup>
                    <ImageTitle top="395px" left="320px">Streets</ImageTitle>
                </CanvasItem>
                <CanvasItem top="475px" left="700px" scrollSpeed={11} className={classes.item}>
                    <ReactPlayer
                        url={intro}
                        type="video/mp4"
                        playing
                        loop
                        muted
                    />
                </CanvasItem>
                <CanvasItem top="680px" left="1450px" scrollSpeed={13} className={classes.item}>
                    <Popup image={giveafuck} alt="Give a fuck" height="420px">
                        <div className={classes.scrollRow} >
                            <img src={dimanche} alt="Give a fuck" />
                            <img src={fuck} alt="Share more consume less" />
                        </div>
                    </Popup>
                    <ImageTitle top="300px" left="24px">Give</ImageTitle>
                    <ImageTitle top="327px" left="25px">A Fuck</ImageTitle>
                </CanvasItem>
                <CanvasItem top="730px" left="1940px" scrollSpeed={14} className={classes.item} style={{ zIndex: 2 }}>
                    <img src={stylist1} alt="Stylist" style={{ height: "420px" }} />
                </CanvasItem>
                <CanvasItem top="450px" left="2300px" scrollSpeed={15} className={classes.item}>
                    <img src={print1} alt="Print" style={{ height: "430px" }} />
                </CanvasItem>
                <CanvasItem top="1160px" left="280px" scrollSpeed={11} className={classes.item} style={{ zIndex: 2 }}>
                    <img src={vimsml} alt="vimsml" style={{ height: "380px" }} />
                </CanvasItem>
                <CanvasItem top="920px" left="780px" scrollSpeed={18} className={classes.item} style={{ zIndex: 2 }}>
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
                <CanvasItem top="1150px" left="1290px" scrollSpeed={15} className={classes.item}>
                    <img src={cavani} alt="Cavani" style={{ height: "320px" }} />
                </CanvasItem>
                <CanvasItem top="1290px" left="10px" scrollSpeed={10} className={classes.item}>
                    <img src={blue} alt="Blue" style={{ height: "550px" }} />
                </CanvasItem>
                <CanvasItem top="1580px" left="630px" scrollSpeed={14} className={classes.item}>
                    <Popup image={havana} alt="Havana" height="480px">
                        <div className={classes.scrollRow}>
                            <ReactPlayer
                                url="https://vimeo.com/388804671"
                                controls
                                playing
                                loop
                                muted
                                width={1200}
                                style={{ display: "inline-block", margin: ("0 50px") }}
                                height="100%"
                            />
                            <img src={havana} alt="Havana" />
                            <img src={havana1} alt="Havana" />
                            <img src={havana2} alt="Havana" />
                        </div>
                        <IconButton className={classes.arrowIcon} >
                            <KeyboardArrowRightIcon fontSize="large" aria-label="ChevronRightIcon" />
                        </IconButton>
                    </Popup>
                    <ImageTitle top="23px" left="100px">Havana Club</ImageTitle>
                    <ImageTitle top="50px" left="140px">Noches</ImageTitle>
                </CanvasItem>
                <CanvasItem top="1550px" left="1150px" scrollSpeed={17} className={classes.item}>
                    <img src={z} alt="Z" style={{ height: "500px" }} />
                </CanvasItem>
                <CanvasItem top="1500px" left="1700px" scrollSpeed={15} className={classes.item} style={{ zIndex: 1 }}>
                    <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
                </CanvasItem>
                <CanvasItem top="1200px" left="2100px" scrollSpeed={12} className={classes.item} >
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
                <CanvasItem top="1600px" left="2250px" scrollSpeed={16} className={classes.item}>
                    <img src={stylist2} alt="Stylist" style={{ height: "450px" }} />
                </CanvasItem>
            </CanvasScroll>
        </div>
    )
}

