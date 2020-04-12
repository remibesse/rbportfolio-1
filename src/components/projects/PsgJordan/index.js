import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import psg from "./assets/psgjordan.jpg"

export default function PsgJordan() {
    const classes = Css()
    const cover = <div className={classes.cover}><img src={psg} alt="Psg Jordan" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={88} left={93} width={27} scrollSpeed={16} className={classes.item}>
            <Project id="psgjordan" cover={cover}>
                <div className={classes.portraitFormat}>
                    <img src={psg} alt="PsgJordan" />
                </div>
            </Project>
        </CanvasItem>
    )
}