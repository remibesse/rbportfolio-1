import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import blue from "./assets/blue.jpg"
import Image from "../../Image";

export default function Blue() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={blue} alt="Blue" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={73} left={3} width={25} scrollSpeed={12} className={classes.item}>
            <Project id="blue" cover={cover}>
                <div className={classes.portraitFormat}>
                    <Image src={blue} alt="Blue"/>
                </div>
            </Project>
        </CanvasItem>
    )
}