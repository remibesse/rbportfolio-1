import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import red from "./assets/red.jpg";

export default function Red() {
    const classes = Css()
    const cover = <div className={classes.cover}><img src={red} alt="Portrait" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={90} left={62} width={27} scrollSpeed={18} className={classes.item}>
            <Project id="red" cover={cover}>
                <div className={classes.portraitFormat}>
                    <img src={red} alt="Portrait"/>
                </div>
            </Project>
        </CanvasItem>
    )
}
