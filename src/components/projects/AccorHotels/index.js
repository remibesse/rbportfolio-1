import React, {useState} from "react"
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
        <CanvasItem top="1100px" left="2000px" scrollSpeed={12} className={classes.item} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <Project id="accorhotels" image={accorhotels} alt="AccorHotels" height="340px">
                <ReactPlayer
                    url="https://vimeo.com/345422526"
                    controls
                    playing
                    loop
                    muted
                    width={1200}
                    height={700}
                />
                <div className={classes.caption}>
                    <Typography>AccorHotels</Typography>
                    <Typography>Directed by Remi Besse</Typography>
                    <Typography>Agency Publicis</Typography>
                    <Typography>Production Standard Films</Typography>
                    <Typography>Dop Ludovic Zuili</Typography>
                </div>
            </Project>
            <Typography className={classes.title} style={isHover ? { fontSize: "50px", top: "230px", left: "200px" } : { top: "250px", left:"300px" }}>AccorHotels</Typography>
        </CanvasItem>
    )
}
