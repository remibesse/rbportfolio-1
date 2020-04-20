import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import stylist1 from "./assets/stylist1.jpg";
import Image from "../../Image";

export default function Stylist1() {
    const classes = Css()
    const cover = <div className={classes.cover}><Image src={stylist1} alt="Stylist" style={{width: "100%"}}/></div>

    return (
        <CanvasItem top={39} left={108} width={23} scrollSpeed={10} className={classes.item}>
            <Project id="stylist1" cover={cover} alt="Stylist">
                <div className={classes.portraitFormat}>
                    <Image src={stylist1} alt="Stylist"/>
                </div>
            </Project>
        </CanvasItem>
    )
}
