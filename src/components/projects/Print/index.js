import React, { useState } from "react"
import Image from "../../Image"
import print from "./assets/print.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function PrintItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="print" top={36} left={135} width={22} scrollSpeed={18}>
            <motion.div layoutId="project-container-print"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={print} alt="Print" layoutId="project-image-print" />
            </motion.div>
        </Item>
    )
}

export default function Print() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-print">
            <motion.img src={print} alt="Print" layoutId="project-image-print" classeName={classes.zoomedImage} />
        </motion.div>
    )
}