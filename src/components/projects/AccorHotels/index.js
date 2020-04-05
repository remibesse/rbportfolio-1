import React, { useState } from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import accorhotels from "./assets/accorhotels.jpg"

export default function AccorHotels() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top={69} left={113} width={37} fontSize={1.5} scrollSpeed={13} className={classes.item} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} onPointerUp={() => setIsHover(false)}>
            <Project id="accorhotels" image={accorhotels} alt="AccorHotels">
                <div className={classes.videoWrapper}>
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
        <Typography className={classes.titleItem} style={isHover ? { top: "70%", left: "40%", fontSize: "150%" } : { top: "72%", left: "50%" }}>AccorHotels</Typography>
        </CanvasItem >
    )
}
