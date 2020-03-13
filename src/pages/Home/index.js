import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Link} from "@material-ui/core";
import CanvasScroll from "../../components/canvasScroll"
import CanvasItem from "../../components/CanvasItem";
import Popup from "../../components/Popup"
import intro from "../../components/VideoIntro/assets/intro.mp4";
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
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

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
        overflowX: "scroll",
        whiteSpace: "nowrap",
        [theme.breakpoints.down("md")]: {
            whiteSpace: "normal",
            overflowX: "hidden",
            height: "100vh",
            width: "100%",
            padding: theme.spacing(51.5, 0, 8, 0) 
        },
        "& img, #player": {
            maxHeight: "100%",
            maxWidth: "100%",
            display: "inline-block",
            alignItems: "center",
            objecyFit: "cover",
            [theme.breakpoints.between("sm", "md")]: {
                display: "block",
                margin: "0 auto",
                marginBottom: theme.spacing(8),
            },
            [theme.breakpoints.down("sm")]: {
                marginBottom: theme.spacing(3),
            }
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
    dimanche: {
        marginRight: "40px"
    },
    arrowIcon: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "none"
        },
    }
}))



export default function Home(props) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <CanvasScroll initialFocus={{ x: 100, y: 100 }}>
                <CanvasItem top="185px" left="450px" scrollSpeed={12} className={classes.item}>
                    <Popup image={adidas} alt="Adidas" style={{ height: "260px" }}>
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
                    </Popup>
                    <Typography style={{ top: "171px", left: "18px", pointerEvents: "none" }}>Adidas</Typography>
                    <Typography style={{ top: "200px", left: "39px", pointerEvents: "none" }}>Reboosted</Typography>
                </CanvasItem>
                <CanvasItem top="100px" left="1430px" scrollSpeed={13} className={classes.item}>
                    <Popup image={streets} alt="Streets" style={{ height: "400px" }}>
                        <div className={classes.scrollRow}>
                            <img src={streets1} alt="Streets" />
                            <img src={streets2} alt="Streets" />
                            <img id="street3" src={streets3} alt="Streets" />
                        </div>
                        <Link to="street3" activeClass="active" smooth={true} duration={500} offset={50} className={classes.arrowIcon}>
                                <KeyboardArrowRightIcon fontSize="large" aria-label="ChevronRightIcon" />
                        </Link>
                    </Popup>
                    <Typography style={{ top: "320px", left: "50px", pointerEvents: "none" }}>Streets</Typography>
                </CanvasItem>
                <CanvasItem top="240px" left="1600px" scrollSpeed={19} className={classes.item}>
                    <Popup image={complex} alt="Complex" style={{ height: "380px" }}>
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
                    <Typography style={{ top: "300px", left: "20px", pointerEvents: "none" }}>Complex</Typography>
                </CanvasItem>
                <CanvasItem top="150px" left="2040px" scrollSpeed={14} className={classes.item}>
                    <img src={sept} alt="sept" style={{ height: "520px" }} />
                </CanvasItem>
                <CanvasItem top="550px" left="100px" scrollSpeed={16} className={classes.item}>
                    <Popup image={faces} alt="Faces" style={{ height: "500px" }}>
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
                    <Typography style={{ top: "395px", left: "320px", pointerEvents: "none" }}>Faces</Typography>
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
                    <Popup image={giveafuck} alt="Give a fuck" style={{ height: "420px" }}>
                        <div className={classes.scrollRow} >
                            <img src={dimanche} alt="Give a fuck" className={classes.dimanche}/>
                            <img src={fuck} alt="Share more consume less" />
                        </div>
                    </Popup>
                    <Typography style={{ top: "300px", left: "24px", pointerEvents: "none" }}>Give</Typography>
                    <Typography style={{ top: "327px", left: "25px", pointerEvents: "none" }}>A fuck</Typography>
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
                <CanvasItem top="1150px" left="1290px" scrollSpeed={15} className={classes.item}>
                    <img src={cavani} alt="Cavani" style={{ height: "320px" }} />
                </CanvasItem>
                <CanvasItem top="1290px" left="10px" scrollSpeed={10} className={classes.item}>
                    <img src={blue} alt="Blue" style={{ height: "550px" }} />
                </CanvasItem>
                <CanvasItem top="1580px" left="630px" scrollSpeed={14} className={classes.item}>
                    <Popup image={havana} alt="Havana" style={{ height: "480px" }}>
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
                    <Typography style={{ top: "23px", left: "100px", pointerEvents: "none" }}>Havana club</Typography>
                    <Typography style={{ top: "50px", left: "140px", pointerEvents: "none" }}>Noches</Typography>
                </CanvasItem>
                <CanvasItem top="1550px" left="1150px" scrollSpeed={17} className={classes.item}>
                    <img src={z} alt="Z" style={{ height: "500px" }} />
                </CanvasItem>
                <CanvasItem top="1500px" left="1700px" scrollSpeed={15} className={classes.item} style={{ zIndex: 1 }}>
                    <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
                </CanvasItem>
                <CanvasItem top="1200px" left="2100px" scrollSpeed={12} className={classes.item} >
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
                <CanvasItem top="1600px" left="2250px" scrollSpeed={16} className={classes.item}>
                    <img src={stylist2} alt="Stylist" style={{ height: "450px" }} />
                </CanvasItem>
            </CanvasScroll>
        </div>
    )
}

