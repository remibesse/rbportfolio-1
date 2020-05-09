import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {CursorContext} from "./Cursor"
import Css from "./projects/Css";
import CamCursor from "./Cursor/CamCursor"
import CanvasItem from "./CanvasItem";

export default function Item({id, top, left, width, fontSize, scrollSpeed, children}) {
    const classes = Css()
    const setCursor = useContext(CursorContext)

    return (
        <Link to={`/home/${id}`}
              key={`item-${id}`}
              onPointerOver={() => setCursor(CamCursor({cam: true}))}
              onPointerOut={() => setCursor(CamCursor({cam: false}))}
        >
            <CanvasItem top={top}
                        left={left}
                        width={width}
                        fontSize={fontSize}
                        scrollSpeed={scrollSpeed}
                        className={classes.cover}
            >
                {children}
            </CanvasItem>
        </Link>
    )
}