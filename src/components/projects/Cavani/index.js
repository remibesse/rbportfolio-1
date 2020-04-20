import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"
import Image from "../../Image";

export default function Cavani() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={cavani} alt="Cavani" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={66} left={70} width={36} scrollSpeed={16} className={classes.item}>
            <Project id="cavani" cover={cover}>
                <div className={classes.landscapeFormat}>
                    <Image src={cavani} alt="Cavani"/>
                </div>
            </Project>
        </CanvasItem>
    )
}