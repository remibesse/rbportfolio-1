import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import print from "./assets/print.jpg";
import Image from "../../Image";

export default function Print() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={print} alt="Print" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={21} left={129} width={22} scrollSpeed={17} className={classes.item}>
            <Project id="print" cover={cover}>
                <div className={classes.portraitFormat}>
                    <Image src={print} alt="Print"/>
                </div>
            </Project>
        </CanvasItem>
    )
}