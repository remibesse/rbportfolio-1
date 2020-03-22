import React, {useState} from "react"
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
        <CanvasItem top="820px" left="680px" scrollSpeed={19} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="budweiser" image={budweiser} alt="Budweiser Kings" height="550px">
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
            </Project>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "8px", left: "30px" } : { top: "8px", left: "30px" }}>Budweiser</Typography>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "60px", left: "90px" } : { top: "38px", left: "65px" }}>Kings</Typography>
        </CanvasItem>
    )
}

