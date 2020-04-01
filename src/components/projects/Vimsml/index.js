import React from "react"
import { makeStyles } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

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

export default function Vimsml() {
    const classes = Css()

    return (
        <CanvasItem top={56} left={15} width={34} scrollSpeed={12} className={classes.item}>
            <Project id="vimsml" image={vimsml} alt="Vimsml">
                <div className={classes.container}>
                    <img src={vimsml} alt="Vimsml" />
                </div>
            </Project>
        </CanvasItem>
    )
}