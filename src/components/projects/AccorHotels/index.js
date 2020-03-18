import React from "react"
import ReactPlayer from "react-player"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CanvasItem from "../../canvasItem"
import Popup from "../../popup"
import ImageTitle from "../../imageTitle"
import accorhotels from "./assets/accorhotels.jpg"

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
        <CanvasItem top="1100px" left="2000px" scrollSpeed={12} className={classes.item} >
        <Popup image={accorhotels} alt="AccorHotels" height="340px">
            <ReactPlayer
                url="https://vimeo.com/345422526"
                controls
                playing
                loop
                muted
                width={1200}
                height={700}
            />
            <div className={classes.caption}>
                <Typography>AccorHotels</Typography>
                <Typography>Directed by Remi Besse</Typography>
                <Typography>Agency Publicis</Typography>
                <Typography>Production Standard Films</Typography>
                <Typography>Dop Ludovic Zuili</Typography>
            </div>
        </Popup>
        <ImageTitle top="250px" left="300px">AccorHotels</ImageTitle>
    </CanvasItem>
    )
}

