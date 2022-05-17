import React, { useState } from "react"
import Image from "../../Image"
import girl from "./assets/girl.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"

export function GirlItem() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="girl" top={119} left={8} width={22} scrollSpeed={13}>
            <motion.div layoutId="project-container-girl"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={girl} alt="Girl" layoutId="project-image-girl" />
            </motion.div>
        </Item>
    )
}

export default function Girl() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-girl">
            <motion.img src={girl} alt="Girl" layoutId="project-image-girl" classeName={classes.zoomedImage} />
        </motion.div>
    )
}


