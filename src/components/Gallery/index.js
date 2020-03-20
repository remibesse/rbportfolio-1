import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import Carousel from 'react-bootstrap/Carousel'

const useStyles = makeStyles(theme => ({
  carousel: {
    width: "800px",
    [theme.breakpoints.down("sm")]: {
      width: "100vw"
  },
    "& .carousel-inner img": {
      width: "100%"
    },
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
        nextIcon={<img src={nextArrow} alt="next" style={{ height: "100px", padding: "20px 40px", position: "absolute", left: "200px" }} />}
        prevIcon={<img src={prevArrow} alt="prev" style={{ height: "100px", padding: "20px 40px", position: "absolute", right: "200px" }} />}
      >
        {props.children}
      </Carousel>
  )
}
