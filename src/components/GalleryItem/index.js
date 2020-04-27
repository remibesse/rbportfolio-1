import React, {cloneElement, useContext} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Frame} from "framer"
import {CursorContext} from "../Cursor";
import DefaultCursor from "../Cursor/DefaultCursor"

const useStyles = makeStyles({
    frame: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
        "@media only screen and (max-width: 600px) and (pointer: coarse)": {
            maxHeight: "80vh"
        },
    },
    galleryItem: {
        maxHeight: "100%",
        maxWidth: "100%",
        pointerEvents: "auto"
    }
})

export default function GalleryItem(props) {
    const classes = useStyles()
    const setCursor = useContext(CursorContext)

    return (
        <div {...props} style={{pointerEvents: "none"}}>
            <Frame background={null} className={classes.frame} width="100%" height="100%" >
                {cloneElement(props.children, {
                    className: classes.galleryItem,
                    onPointerOver: () => setCursor(DefaultCursor({close: false})),
                    onPointerOut: () => setCursor(DefaultCursor({close: true})),
                })}
            </Frame>
        </div>
    )
}