import React from "react"
import { makeStyles } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import vimsml from "./assets/vimsml.jpg"

const useStyles = makeStyles(theme => ({
    vimsmlWrapper: {
        height: theme.spacing(87.5),
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "100%"
        }
    },
    vimsmlImage: {
        height: "100%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        }
    }
}))

export default function Vimsml() {
    const classes = Css()
    const style = useStyles()

    return (
        <CanvasItem top="58vw" left="4vw" width="34vw" scrollSpeed={12} className={classes.item}>
            <Project id="vimsml" image={vimsml} alt="Vimsml">
                <div className={style.vimsmlWrapper}>
                    <img src={vimsml} alt="Vimsml" className={style.vimsmlImage} />
                </div>
            </Project>
        </CanvasItem>
    )
}