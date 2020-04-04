import React, { useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import budweiser from "./assets/budweiser.jpg"

export default function Budweiser() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top={43} left={41} width={25} fontSize={1.5} scrollSpeed={19} className={classes.item} onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)} onPointerUp={() => setIsHover(false)}>
            <Project id="budweiser" image={budweiser} alt="Budweiser Kings">
                <div className={classes.videoWrapper}>
                    <ReactPlayer
                        url="https://vimeo.com/376855589/b811044f1f"
                        controls
                        playing
                        loop
                        muted
                    />
                </div>
                <div className={classes.caption}>
                    <Typography>Budweiser Kings</Typography>
                </div>
            </Project>
            <Typography className={classes.titleItem} style={isHover ? { top: "1%", left: "7%", fontSize: "150%" } : { top: "2%", left: "7%" }}>Budweiser</Typography>
            <Typography className={classes.titleItem} style={isHover ? { top: "9%", left: "18%", fontSize: "150%"  } : { top: "7%", left: "14%" }}>Kings</Typography>
        </CanvasItem>
    )
}

