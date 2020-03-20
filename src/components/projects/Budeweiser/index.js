import React, {useState} from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Popup from "../../Popup"
import Css from "../Css.js"
import budweiser from "./assets/budweiser.jpg"

export default function Budeweiser() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="820px" left="680px" scrollSpeed={18} className={classes.item}>
            <Popup image={budweiser} alt="Budweiser Kings" height="550px" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
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
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "8px", left: "30px" } : { top: "8px", left: "30px" }}>Budeweiser</Typography>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "60px", left: "90px" } : { top: "38px", left: "65px" }}>Kings</Typography>
        </CanvasItem>
    )
}

