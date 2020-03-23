import React, { useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import adidas from "./assets/adidas.jpg"


export default function Adidas() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="85px" left="350px" scrollSpeed={13} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="adidas" image={adidas} alt="Adidas" height="260px">
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
            </Project>
            <Typography className={classes.title} style={isHover ? { top: "136px", left: "18px", fontSize: "50px" } : { top: "170px", left: "19px" }}>Adidas</Typography>
            <Typography className={classes.title} style={isHover ? { top: "180px", left: "55px", fontSize: "50px" } : { top: "200px", left: "41px" }}>Reboosted</Typography>
        </CanvasItem>
    )
}

