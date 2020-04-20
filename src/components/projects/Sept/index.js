import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import sept from "./assets/sept.jpg"
import Image from "../../Image";

export default function Sept() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={sept} alt="Sept" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={4} left={112} width={21} scrollSpeed={15} className={classes.item}>
            <Project id="sept" cover={cover} alt="Sept">
                <div className={classes.portraitFormat}>
                    <Image src={sept} alt="Sept" />
                </div>
            </Project>
        </CanvasItem>
    )
}
