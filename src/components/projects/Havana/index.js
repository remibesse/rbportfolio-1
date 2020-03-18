import React from "react"
import ReactPlayer from "react-player"
import { makeStyles } from "@material-ui/core/styles"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import Carousel from "../../carousel"
import havana1 from "./assets/havana1.jpg"
import havana2 from "./assets/havana2.jpg"
import havana from "./assets/havana.jpg"

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
        <CanvasItem top="1480px" left="530px" scrollSpeed={14} className={classes.item}>
        <Popup image={havana} alt="Havana" height="480px">
            <Carousel>
                <ReactPlayer
                    url="https://vimeo.com/388804671"
                    controls
                    playing
                    loop
                    muted
                    width="100%"
                />
                <img src={havana} alt="Havana" />
                <img src={havana1} alt="Havana" />
                <img src={havana2} alt="Havana" />
            </Carousel>
        </Popup>
        <ImageTitle top="23px" left="100px">Havana Club</ImageTitle>
        <ImageTitle top="50px" left="140px">Noches</ImageTitle>
    </CanvasItem>
    )
}

