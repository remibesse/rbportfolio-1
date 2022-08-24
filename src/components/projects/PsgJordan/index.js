import React, { useState } from "react"
import Image from "../../Image"
import psgJordan from "./assets/psgjordan.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function PsgJordanItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="psgJordan" top={66} left={64} width={23} scrollSpeed={16}>
            <motion.div layoutId="project-container-psgJordan"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={psgJordan} alt="PsgJordan" layoutId="project-image-psgJordan" />
            </motion.div>
        </Item>
    )
}

export default function PsgJordan() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-psgJordan">
            <motion.img src={psgJordan} alt="psgJordan" layoutId="project-image-psgJordan" classeName={classes.zoomedImage} />
        </motion.div>
    )
}