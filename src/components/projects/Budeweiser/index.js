import React from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import budweiser from "./assets/budweiser.jpg"

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        "& .MuiTypography-root": {
            position: "absolute",
            color: theme.palette.text.primary,
            fontSize: theme.spacing(3.6),
            textTransform: "uppercase",
            fontWeight: "bold"
        }
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.5),
            textTransform: "uppercase",
            lineHeight: 1.2,
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",
            }
        }
    },
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        },
    },
}))

export default function Home(props) {
    const classes = useStyles()

    return (
        <CanvasItem top="820px" left="680px" scrollSpeed={18} className={classes.item}>
            <Popup image={budweiser} alt="Budweiser Kings" height="550px">
                <ReactPlayer
                    url="https://vimeo.com/376855589/b811044f1f"
                    controls
                    playing
                    loop
                    muted
                    width={1200}
                    height={700}
                />
                <div className={classes.caption}>
                    <Typography>Budweiser Kings</Typography>
                </div>
            </Popup>
            <ImageTitle top="8px" left="30px">Budweiser</ImageTitle>
            <ImageTitle top="38px" left="65px">Kings</ImageTitle>
        </CanvasItem>
    )
}

