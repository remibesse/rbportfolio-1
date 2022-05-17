import React, { useState } from "react"
import Image from "../../Image"
import stylist from "./assets/stylist2.jpg"
import Item from "../../Item"
import { motion } from "framer-motion"
import Css from "../Css.js"


export function Stylist2Item() {
    const [isHover, setIsHover] = useState(false)

    return (
        <Item id="stylist" top={111} left={125} width={20} scrollSpeed={9}>
            <motion.div layoutId="project-container-stylist"
                onPointerOver={() => setIsHover(true)}
                onPointerOut={() => setIsHover(false)}
                onPointerUp={() => setIsHover(false)}
            >
                <Image src={stylist} alt="Stylist" layoutId="project-image-stylist" />
            </motion.div>
        </Item>
    )
}

export default function Stylist2() {
    const classes = Css()

    return (
        <motion.div layoutId="project-container-stylist">
            <motion.img src={stylist} alt="Stylist" layoutId="project-image-stylist" classeName={classes.zoomedImage} />
        </motion.div>
    )
}
