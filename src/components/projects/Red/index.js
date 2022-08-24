import React, { useState } from "react"
import Image from "../../Image"
import red from "./assets/red.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function RedItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="red" top={8} left={85} width={23} scrollSpeed={18}>
            <motion.div layoutId="project-container-red"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={red} alt="Red" layoutId="project-image-red" />
            </motion.div>
        </Item>
    )
}

export default function Red() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-red">
            <motion.img src={red} alt="Red" layoutId="project-image-red" classeName={classes.zoomedImage} />
        </motion.div>
    )
}
