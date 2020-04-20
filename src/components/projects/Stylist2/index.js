import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import stylist from "./assets/stylist2.jpg";
import Image from "../../Image";

export default function Stylist2() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={stylist} alt="Stylist" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={93} left={125} width={20} scrollSpeed={17} className={classes.item}>
            <Project id="stylist2" cover={cover}>
                <div className={classes.portraitFormat}>
                    <Image src={stylist} alt="Stylist"/>
                </div>
            </Project>
        </CanvasItem>
    )
}
