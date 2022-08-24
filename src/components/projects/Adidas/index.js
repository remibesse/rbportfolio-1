import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import adidas from "./assets/adidas.jpg"

export function AdidasItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="adidas" top={30} left={33} width={33} fontSize={1.5} scrollSpeed={13}>
            <motion.div layoutId="project-container-adidas"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={adidas} alt="Adidas" layoutId="project-image-adidas" />
                <ImageTitle
                    isHover={isHover}
                    title="Adidas Originals"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
                />
            </motion.div>
        </Item>
    )
}

export default function Adidas() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-adidas">
            <motion.div layoutId="project-image-adidas"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/530203240"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Adidas forever</Typography>
            </div>
        </motion.div>
    )
}

