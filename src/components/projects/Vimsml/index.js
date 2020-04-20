import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"
import Image from "../../Image";

export default function Vimsml() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={vimsml} alt="Vimsml" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={56} left={11} width={34} scrollSpeed={12} className={classes.item}>
            <Project id="vimsml" cover={cover}>
                <div className={classes.landscapeFormat}>
                    <Image src={vimsml} alt="Vimsml"/>
                </div>
            </Project>
        </CanvasItem>
    )
}