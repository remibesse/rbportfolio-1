import React from "react"
import CanvasItem from "../../CanvasItem"
import Image from "../../Image"
import Css from "../Css.js"
import lacoste from "./assets/lacoste.jpg"

export default function Lacoste() {
    const classes = Css()

    return (
        <CanvasItem top={36} left={100} width={30} scrollSpeed={10} className={classes.item}>
            <Image src={lacoste} alt="Lacoste" className={classes.cover}/>
            {/* <ImageTitle
                    isHover={isHover}
                    title="Lacoste"
                    top="68%"
                    left="5%"
                    topHover="60%"
                    leftHover="4%"
                />
                <ImageTitle
                    isHover={isHover}
                    title="Eaux fraiches"
                    top="75%"
                    left="9%"
                    topHover="74%"
                    leftHover="10%"
                /> */}
        </CanvasItem>
    )
}