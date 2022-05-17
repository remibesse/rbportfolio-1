import React, { useState } from "react"
import Image from "../../Image"
import ichon from "./assets/ichon.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function IchonItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="ichon" top={154} left={92} width={17} scrollSpeed={11}>
            <motion.div layoutId="project-container-ichon"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={ichon} alt="Ichon" layoutId="project-image-ichon" />
            </motion.div>
        </Item>
    )
}

export default function Ichon() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-ichon">
            <motion.img src={ichon} alt="Ichon" layoutId="project-image-ichon" classeName={classes.zoomedImage} />
        </motion.div>
    )
}
