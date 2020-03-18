import React from "react"
import ReactPlayer from "react-player"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import adidas from "./assets/adidas.jpg"

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
        <CanvasItem top="85px" left="350px" scrollSpeed={12} className={classes.item}>
            <Popup image={adidas} alt="Adidas" height="260px">
                <ReactPlayer
                    url="https://vimeo.com/323459822"
                    controls
                    playing
                    loop
                    muted
                    width={1200}
                    height={700}
                    className={classes.reactPlayer}
                />
                <div className={classes.caption}>
                    <Typography>Adidas reboosted</Typography>
                    <Typography>Directed by Remi Besse</Typography>
                    <Typography>Dop Ludovic Zuili</Typography>
                    <Typography>Soundtrack Le Ministere</Typography>
                </div>
            </Popup>
            <ImageTitle top="171px" left="18px">Adidas</ImageTitle>
            <ImageTitle top="200px" left="39px">Reboosted</ImageTitle>
        </CanvasItem>
    )
}

