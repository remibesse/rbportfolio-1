import React, { useContext, useState } from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { motion } from "framer-motion"
import Css from "../Css.js"
import { CursorContext } from "../../Cursor"
import Item from "../../Item"
import Image from "../../Image"
import ImageTitle from "../ImageTitle"
import leconsulat from "./assets/leconsulat.jpg"

export function LeConsulatItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="leconsulat" top={140} left={42} width={43} fontSize={1.5} scrollSpeed={7}>
            <motion.div layoutId="project-container-leConsulat"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={leconsulat} alt="Le Consulat" layoutId="project-image-leConsulat" />
                <ImageTitle
                    isHover={isHover}
                    title="Le Consulat"
                    top="6%"
                    left="60%"
                    topHover="6%"
                    leftHover="50%"
                />
            </motion.div>
        </Item>
    )
}

export default function LeConsulat() {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    return (
        <motion.div layoutId="project-container-leConsulat">
            <motion.div layoutId="project-image-leConsulat"
                className={classes.videoWrapper}
                onPointerOver={handlePointerOverVideo}
            >
                <ReactPlayer
                    url="https://vimeo.com/279631319"
                    controls
                    playing
                    loop
                    height="auto"
                    width="auto"
                />
            </motion.div>
            <div className={classes.caption}>
                <Typography>Le Consulat</Typography>
                <Typography>Starring Bamao Yende, Ichon, Fanny François, Marlon Magnee</Typography>
                <Typography>Commissionned by Lio Bensemoun</Typography>
            </div>
        </motion.div>
    )
}

