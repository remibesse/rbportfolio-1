import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import accorhotels from "./assets/accorhotels.jpg"
import {CursorContext} from "../../Cursor";
import Image from "../../Image";
import DefaultCursor from "../../Cursor/DefaultCursor";

export default function AccorHotels() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <Image src={accorhotels} alt="AccorHotels"/>
        <Typography className={classes.titleItem} style={isHover ? {top: "70%", left: "40%", fontSize: "150%"} : {
            top: "72%",
            left: "50%"
        }}>AccorHotels</Typography>
    </div>

    return (
        <CanvasItem top={69} left={113} width={37} fontSize={1.5} scrollSpeed={13} className={classes.item}
                    onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)}
                    onPointerUp={() => setIsHover(false)}>
            <Project id="accorhotels" cover={cover}>
                <div className={classes.videoWrapper}
                     onPointerOver={handlePointerOverVideo}
                     onPointerOut={() => setCursor(DefaultCursor({close: true}))}
                >
                    <ReactPlayer
                        url="https://vimeo.com/345422526"
                        controls
                        playing
                        loop
                        muted
                    />
                </div>
                <div className={classes.caption}>
                    <Typography>AccorHotels</Typography>
                    <Typography>Directed by Remi Besse</Typography>
                    <Typography>Agency Publicis</Typography>
                    <Typography>Production Standard Films</Typography>
                    <Typography>Dop Ludovic Zuili</Typography>
                </div>
            </Project>
        </CanvasItem>
    )
}
