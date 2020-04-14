import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import adidas from "./assets/adidas.jpg"
import {CloseCursor, CursorContext} from "../../Cursor";

export default function Adidas() {
    const classes = Css()
    const setCursor = useContext(CursorContext)
    const [isHover, setIsHover] = useState(false)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <img src={adidas} alt="Adidas" style={{width: "100%"}}/>
        <Typography className={classes.titleItem} style={isHover ? {top: "58%", left: "4%", fontSize: "150%"} : {
            top: "67%",
            left: "5%"
        }}>Adidas</Typography>
        <Typography className={classes.titleItem} style={isHover ? {top: "74%", left: "10%", fontSize: "150%"} : {
            top: "78%",
            left: "9.5%"
        }}>Reboosted</Typography>
    </div>

    return (
        <CanvasItem top={1} left={27} width={28} fontSize={1.5} scrollSpeed={13} className={classes.item}>
            <Project id="adidas" cover={cover}>
                <div className={classes.videoWrapper}
                     onPointerOver={handlePointerOverVideo}
                     onPointerOut={() => setCursor(CloseCursor)}
                >
                    <ReactPlayer
                        url="https://vimeo.com/323459822"
                        controls
                        playing
                        loop
                        muted
                    />
                </div>

                <div className={classes.caption}>
                    <Typography>Adidas reboosted</Typography>
                    <Typography>Directed by Remi Besse</Typography>
                    <Typography>Dop Ludovic Zuili</Typography>
                    <Typography>Soundtrack Le Ministere</Typography>
                </div>
            </Project>
        </CanvasItem>
    )
}

