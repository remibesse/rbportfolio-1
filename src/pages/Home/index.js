import React, { useState, useEffect, useRef } from "react"
import { makeStyles } from '@material-ui/core/styles'
import CanvasScroll from "../../components/canvasScroll"
import VideoIntro from "../../components/videoIntro"
import Adidas from "../../components/projects/Adidas"
import Streets from "../../components/projects/Streets"
import Complex from "../../components/projects/Complex"
import Faces from "../../components/projects/Faces"
import Giveafuck from "../../components/projects/Giveafuck"
import Budweiser from "../../components/projects/Budeweiser"
import Havana from "../../components/projects/Havana"
import AccorHotels from "../../components/projects/AccorHotels"
import Sept from "../../components/projects/Sept"
import Stylist1 from "../../components/projects/Stylist1"
import Stylist2 from "../../components/projects/Stylist2"
import Print from "../../components/projects/Print"
import Vimsml from "../../components/projects/Vimsml"
import Cavani from "../../components/projects/Cavani"
import Blue from "../../components/projects/Blue"
import Psg from "../../components/projects/PsgJordan"
import Red from "../../components/projects/Red"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
    }
}))

export default function Home(props) {
    const style = useStyles()

    const skipIntroTimeout = useRef()
    const [intro, setIntro] = useState(props.intro !== undefined ? props.intro : true)

    useEffect(() => {
        skipIntroTimeout.current = setTimeout(() => setIntro(false), 6000)
        window.addEventListener("keydown", handleKeyDown)
        return () => {
            clearTimeout(skipIntroTimeout.current)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape")
            setIntro(false)
    }

    return (
        <Fade in={true} timeout={800} >
            <CanvasScroll scrollSpeed={(intro ? 0 : 14)} className={style.root}>
                <VideoIntro fullscreen={intro} onClick={() => setIntro(false)} />
                <Adidas />
                <Streets />
                <Complex />
                <Faces />
                <Giveafuck />
                <Budweiser />
                <Havana />
                <AccorHotels />
                <Sept />
                <Stylist1 />
                <Print />
                <Vimsml />
                <Cavani />
                <Blue />
                <Psg />
                <Stylist2 />
                <Red />
            </CanvasScroll >
        </Fade>
    )
}

