import React from "react"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import sept from "./assets/sept.jpg";
import {makeStyles} from "@material-ui/core";


export default function Sept() {
    const classes = Css()

    return (
        <CanvasItem top={5} left={116} width={21} scrollSpeed={15} className={classes.item}>
            <Project id="sept" image={sept} alt="Sept">
                <div className={classes.container}>
                    <img src={sept} alt="Sept"  />
                </div>
            </Project>
        </CanvasItem>
    )
}
