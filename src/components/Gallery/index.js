import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
  carousel: {
    width: "800px",
    [theme.breakpoints.down("xs")]: {
      width: "100vw"
    },
    "& .carousel-inner img": {
      width: "100%"
    },
    "& img.prevArrow, & img.nextArrow": {
      height: "100px",
      padding: "20px 40px",
      position: "absolute",
    },
    "& img.prevArrow": {
      right: "200px",
      [theme.breakpoints.down("xs")]: {
        position: "static",
        height: "50px",
        padding: 0,
      }
    },
    "& img.nextArrow": {
      left: "200px",
      [theme.breakpoints.down("xs")]: {
        position: "static",
        height: "50px",
        padding: 0,
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
      fade={true}
      indicators={false}
      touch={true}
      nextIcon={<img src={nextArrow} alt="next" className="nextArrow" />}
      prevIcon={<img src={prevArrow} alt="prev" className="prevArrow" />}
    >
      {props.children}
    </Carousel>
  )
}
