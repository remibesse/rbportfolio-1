import React from "react"
import { makeStyles } from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Css from "../Css.js"
import cavani from "./assets/cavani.jpg"

const useStyles = makeStyles(theme => ({
    cavaniWrapper: {
        height: theme.spacing(71.25),
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "100%"
        }
    },
    cavaniImage: {
        height: "100%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        }
    }
}))

export default function Cavani() {
    const classes = Css()
    const style = useStyles()

    return (
        <CanvasItem top="1050px" left="1190px" scrollSpeed={16} className={classes.item}>
            <Project id="cavani" image={cavani} alt="Cavani" height="320px">
                <div className={style.cavaniWrapper}>
                    <img src={cavani} alt="Cavani" className={style.cavaniImage} />
                </div>
            </Project>
        </CanvasItem>
    )
}