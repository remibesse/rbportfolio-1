import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import Typography from "@material-ui/core/Typography"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import { motion } from "framer-motion"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import nike from "./assets/nike.jpg"

export function NikeItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="nike" top={0} left={16} width={25} fontSize={1.5} scrollSpeed={6}>
            <motion.div layoutId="project-container-nike"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={nike} alt="Nike" layoutId="project-image-nike" />
                <ImageTitle
                    isHover={isHover}
                    title="Nike"
                    top="74%"
                    left="10%"
                    topHover="69%"
                    leftHover="2%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Train Everyday"
                    top="80%"
                    left="14%"
                    topHover="80%"
                    leftHover="8%"
                />
            </motion.div>
        </Item>
    )
}

export default function Nike() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-nike">
            <motion.div layoutId="project-image-nike"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/462614064"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Nike Train Everyday</Typography>
            </div>
        </motion.div>
    )
}
