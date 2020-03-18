import React, {useState} from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import Carousel from "../../carousel"
import Css from "../Css.js"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg";

export default function Complex() {
    const classes = Css()
    const [isHover, setIsHover] = useState(false)

    return (
        <CanvasItem top="140px" left="1500px" scrollSpeed={19} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} >
            <Popup image={complex} alt="Complex" height="380px">
                <Carousel>
                    <ReactPlayer
                        url={complexVideo}
                        controls
                        playing
                        loop
                        muted
                        height="100%"
                    />
                    <img src={zoneb} alt="Zone B" />
                    <img src={falcon} alt="Falcon" />
                    <img src={whitesmall} alt="White Small" />
                </Carousel>
            </Popup>
            <Typography className={classes.title} style={isHover ? { top: "280px", left: "20px", fontSize: "50px" } : { top: "300px", left: "20px" }}>Complex</Typography>
        </CanvasItem>
    )
}

