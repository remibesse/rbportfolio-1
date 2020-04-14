import React, {cloneElement} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Frame} from "framer"

const useStyles = makeStyles({
    frame: {
        display: "flex !important",
        justifyContent: "center",
        alignItems: "center",
    },
    galleryItem: {
        maxHeight: "100%",
        maxWidth: "100%",
    }
})

export default function GalleryItem(props) {
    const classes = useStyles()

    return (
        <div className={props.className}>
            <Frame background={null} className={classes.frame} width="100%" height="100%">
                {cloneElement(props.children, {className: classes.galleryItem})}
            </Frame>
        </div>
    )
}