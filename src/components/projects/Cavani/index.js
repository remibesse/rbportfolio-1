import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import cavani from "./assets/cavani.mp4"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
// import adidas from "./assets/adidas.jpg"

export function CavaniItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="cavani" top={81} left={73} width={36} height={20} scrollSpeed={16}>
            <motion.div layoutId="project-container-cavani"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={cavani} alt="Cavani" layoutId="project-image-cavani" />
            </motion.div>
        </Item>
    )
}

export default function Cavani() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-cavani">
            <motion.div layoutId="project-image-cavani"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/323459822"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
        </motion.div>
    )
}

