import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
    carousel: {
        textAlign: "center",
        "& .carousel-inner img": {
            maxHeight: "85vh",
            height: "auto",
            maxWidth: "100%",
            "@media (max-width: 600px) and (pointer: coarse)": {
                padding: "10% 0"
            }
        },
        "& .carousel-indicators": {
            position: "absolute",
            bottom: "-60px"
        },
        "& .carousel-indicators li": {
            borderRadius: "100%",
            width: "4px",
            height: "4px",
            marginRight: "2px",
            marginLeft: "2px",
        },
        "& img.prevArrow, & img.nextArrow": {
            height: "100px",
            padding: theme.spacing(2.5, 5),
            "@media (max-width: 600px) and (pointer: coarse)": {
                display: "none"
            },
        },
        "& img.prevArrow": {
            "@media (min-width: 1050px)": {
                left: "150px",
                position: "fixed",
            }
        },
        "& img.nextArrow": {
            "@media (min-width: 1050px)": {
                right: "150px",
                position: "fixed",
            }
        }
    }
}))

export default function Gallery(props) {
    const classes = useStyles()

    return (
        <Carousel
            className={classes.carousel}
            wrap={false}
            interval={null}
            indicators={true}
            touch={true}
            prevIcon={<img src={prevArrow} alt="prev" className="prevArrow"/>}
            nextIcon={<img src={nextArrow} alt="next" className="nextArrow"/>}
        >
            {props.children}
        </Carousel>
    )
}