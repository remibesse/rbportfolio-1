import React, {useState, useEffect, useRef} from "react"
import {makeStyles} from '@material-ui/core/styles'
import CanvasScroll from "../../components/CanvasScroll"
import VideoIntro from "../../components/projects/VideoIntro"
import Adidas from "../../components/projects/Adidas"
import Streets from "../../components/projects/Streets"
import Complex from "../../components/projects/Complex"
import Faces from "../../components/projects/Faces"
import Giveafuck from "../../components/projects/Giveafuck"
import Budweiser from "../../components/projects/Budweiser"
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

const useStyles = makeStyles({
    root: {
        height: "100vh",
    }
})

function useForceUpdate() {
    const [, setValue] = useState(0)
    return () => setValue(value => ++value)
}

export default function Home(props) {
    const style = useStyles()

    const forceUpdate = useForceUpdate()
    const skipIntroTimeout = useRef()
    const [intro, setIntro] = useState(
        document.documentElement.clientWidth < 600 ?
            false :
            (props.intro !== undefined ? props.intro : true)
    )

    useEffect(() => {
        skipIntroTimeout.current = setTimeout(() => setIntro(false), 5000)
        window.addEventListener("keydown", handleKeyDown)
        window.addEventListener('resize', forceUpdate)
        return () => {
            clearTimeout(skipIntroTimeout.current)
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [])

    const handleKeyDown = e => {
        if (e.key === "Enter" || e.key === " " || e.key === "Escape")
            setIntro(false)
    }

    const introPlaying = () => {
        clearTimeout(skipIntroTimeout.current)
        skipIntroTimeout.current = setTimeout(() => setIntro(false), 7000)
    }

    const scaler = Math.log1p(document.documentElement.clientWidth / 50) * 4.4
    const videoPosition = 34 * scaler
    const videoSize = 36 * scaler
    const restScreen = document.documentElement.clientWidth - videoSize
    const initialScroll = {x: -(videoPosition - restScreen / 2) - 50, y: 0}

    return (
        <Fade in={true} timeout={600} style={{height: "100%", width: "100%"}}>
            <CanvasScroll scroll={initialScroll}
                          reset={props.reset}
                          canvasEnds={{right: 151 * scaler + 50 + 50, bottom: 119 * scaler + 50 + 50}}
                          scrollSpeed={intro ? 0 : 55}
                          className={style.root}>
                <div style={{position: "relative", top: 50, left: 50}}>
                    <VideoIntro fullscreen={intro} onCanPlay={introPlaying} onClick={() => setIntro(false)}/>
                    <Adidas/>
                    <Streets/>
                    <Complex/>
                    <Faces/>
                    <Giveafuck/>
                    <Budweiser/>
                    <Havana/>
                    <AccorHotels/>
                    <Sept/>
                    <Stylist1/>
                    <Print/>
                    <Vimsml/>
                    <Cavani/>
                    <Blue/>
                    <Psg/>
                    <Stylist2/>
                    <Red/>
                </div>
            </CanvasScroll>
        </Fade>
    )
}

