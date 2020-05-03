import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core"
import {CursorContext} from "./Cursor"
import CamCursor from "./Cursor/CamCursor"
import CanvasItem from "./CanvasItem";

const useStyles = makeStyles({
    root: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        }
    },
})

export default function Item({id, top, left, width, fontSize, scrollSpeed, children}) {
    const classes = useStyles()
    const setCursor = useContext(CursorContext)

    return (
        <Link to={`/project/${id}`}
              onPointerOver={() => setCursor(CamCursor({cam: true}))}
              onPointerOut={() => setCursor(CamCursor({cam: false}))}
        >
            <CanvasItem top={top}
                        left={left}
                        width={width}
                        fontSize={fontSize}
                        scrollSpeed={scrollSpeed}
                        className={classes.root}
            >
                {children}
            </CanvasItem>
        </Link>
    )
}