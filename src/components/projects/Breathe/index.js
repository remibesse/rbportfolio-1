import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { motion } from "framer-motion"
import { Typography } from "@material-ui/core"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import breathe from "./assets/breathe.jpg"

export function BreatheItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="breathe" top={4} left={18} width={35} fontSize={1.5} scrollSpeed={6}>
            <motion.div layoutId="project-container-breathe"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={breathe} alt="Breathe" layoutId="project-image-breathe" />
                <ImageTitle
                    isHover={isHover}
                    title='«Breathe»'
                    top="68%"
                    left="6%"
                    topHover="60%"
                    leftHover="4%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Kaytranada + IDK"
                    top="75%"
                    left="7%"
                    topHover="74%"
                    leftHover="8%"
                />
            </motion.div>
        </Item>
    )
}

export default function Breathe() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-breathe">
            <motion.div layoutId="project-image-breathe"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/712561471"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>«Breathe»</Typography>
            </div>
        </motion.div>
    )
}