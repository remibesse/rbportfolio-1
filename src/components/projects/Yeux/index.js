import React, { useState } from "react"
import Image from "../../Image"
import yeux from "./assets/yeux.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function YeuxItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="yeux" top={133} left={98} width={18} scrollSpeed={18}>
            <motion.div layoutId="project-container-yeux"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={yeux} alt="Yeux" layoutId="project-image-yeux" />
            </motion.div>
        </Item>
    )
}

export default function Yeux() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-yeux">
            <motion.img src={yeux} alt="Yeux" layoutId="project-image-yeux" classeName={classes.zoomedImage} />
        </motion.div>
    )
}
