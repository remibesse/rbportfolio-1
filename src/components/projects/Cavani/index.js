import React from "react"
import {makeStyles} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

const useStyles = makeStyles({
    containerCavani: {
        height: "60vh",
        width: "auto",
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        "& img": {
            maxHeight: "100%",
            maxWidth: "100%",
        }
    },
})

export default function Cavani() {
    const classes = Css()
    const style = useStyles()

    return (
        <CanvasItem top={67} left={74} width={36} scrollSpeed={16} className={classes.item}>
            <Project id="cavani" image={cavani} alt="Cavani">
                <div className={style.containerCavani}>
                    <img src={cavani} alt="Cavani"/>
                </div>
            </Project>
        </CanvasItem>
    )
}