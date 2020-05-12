import React, {useContext, useState} from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import Css from "../Css.js"
import {CursorContext} from "../../Cursor"
import {motion} from "framer-motion"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import accorhotels from "./assets/accorhotels.jpg"

export function AccorHotelsItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="accorHotels" top={69} left={113} width={37} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-image-accorHotels"
                        onPointerOver={() => setIsHover(true)}
                        onPointerOut={() => setIsHover(false)}
                        onPointerUp={() => setIsHover(false)}
            >
                <Image src={accorhotels} alt="AccorHotels"/>
                <ImageTitle
                    isHover={isHover}
                    title="AccorHotels"
                    top="72%"
                    left="50%"
                    topHover="70%"
                    leftHover="42%"
                />
            </motion.div>
        </Item>
    )
}

export default function AccorHotels() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div style={{position: "relative"}}>
            <motion.div layoutId="project-image-accorHotels"
                        style={{position: "absolute", width: "100%", height: "100%", opacity: 0}}
            />
            <div className={classes.videoWrapper}
                 onPointerOver={handlePointerOverVideo}
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
        </motion.div>
    )
}
