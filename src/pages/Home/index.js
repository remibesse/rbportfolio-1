import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from '@material-ui/core/styles'
import CanvasScroll from "../../components/canvasScroll"
import CanvasItem from "../../components/canvasItem"
import VideoIntro from "../../components/videoIntro"
import Adidas from "../../components/projects/Adidas"
import Streets from "../../components/projects/Streets"
import Complex from "../../components/projects/Complex"
import Faces from "../../components/projects/Faces"
import Giveafuck from "../../components/projects/Giveafuck"
import Budweiser from "../../components/projects/Budeweiser"
import Havana from "../../components/projects/Havana"
import AccorHotels from "../../components/projects/AccorHotels"
import Fade from '@material-ui/core/Fade'
import blue from "./assets/blue.jpg"
import cavani from "./assets/cavani.jpg"
import print1 from "./assets/print1.jpg"
import psgjordan from "./assets/psgjordan.jpg"
import sept from "./assets/sept.jpg"
import stylist1 from "./assets/stylist1.jpg"
import stylist2 from "./assets/stylist2.jpg"
import vimsml from "./assets/vimsml.jpg"
import z from "./assets/z.jpg"

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
    },
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
        <Fade in={true} timeout={800} >
            <CanvasScroll scrollSpeed={(intro ? 0 : 14)} className={classes.root}>
                <VideoIntro fullscreen={intro} onClick={() => setIntro(false)} />
                <Adidas />
                <Streets />
                <Complex />
                <Faces />
                <Giveafuck />
                <Budweiser />
                <Havana />
                <AccorHotels />
                <CanvasItem top="50px" left="1940px" scrollSpeed={14} className={classes.item}>
                    <img src={sept} alt="sept" style={{ height: "520px" }} />
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
                <CanvasItem top="1050px" left="1190px" scrollSpeed={15} className={classes.item}>
                    <img src={cavani} alt="Cavani" style={{ height: "320px" }} />
                </CanvasItem>
                <CanvasItem top="1190px" left="-90px" scrollSpeed={10} className={classes.item}>
                    <img src={blue} alt="Blue" style={{ height: "550px" }} />
                </CanvasItem>
                <CanvasItem top="1450px" left="1050px" scrollSpeed={17} className={classes.item}>
                    <img src={z} alt="Z" style={{ height: "500px" }} />
                </CanvasItem>
                <CanvasItem top="1400px" left="1600px" scrollSpeed={15} className={classes.item}>
                    <img src={psgjordan} alt="PSG Jordan" style={{ height: "400px" }} />
                </CanvasItem>
                <CanvasItem top="1500px" left="2150px" scrollSpeed={16} className={classes.item}>
                    <img src={stylist2} alt="Stylist" style={{ height: "450px" }} />
                </CanvasItem>
            </CanvasScroll >
        </Fade>
    )
}

