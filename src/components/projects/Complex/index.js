import React, {useContext, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import {Typography} from "@material-ui/core"
import CanvasItem from "../../CanvasItem"
import Project from "../../Project"
import Gallery from "../../Gallery"
import Carousel from "react-bootstrap/Carousel"
import Css from "../Css.js"
import complexVideo from "./assets/complex.mp4"
import zoneb from "./assets/zoneb.jpg"
import falcon from "./assets/falcon.jpg"
import whitesmall from "./assets/whitesmall.jpg"
import complex from "./assets/complex.jpg"
import {CloseCursor, CursorContext} from "../../Cursor";

const useStyles = makeStyles(theme => ({
    playerCarousel: {
        height: "800px",
        "@media (max-width: 600px)": {
            height: "100%",
            width: "100vw"
        },
        "& video": {
            "@media (max-width: 600px)": {
                width: "100vw"
            }
        }
    }
}))

export default function Complex() {
    const style = useStyles()
    const classes = Css()
    const [isHover, setIsHover] = useState(false)
    const setCursor = useContext(CursorContext)

    const handlePointerOverVideo = e => {
        e.stopPropagation()
        setCursor(undefined)
    }

    const cover = <div className={classes.cover}
                       onPointerOver={() => setIsHover(true)}
                       onPointerOut={() => setIsHover(false)}
                       onPointerUp={() => setIsHover(false)}
    >
        <img src={complex} alt="Complex" style={{width: "100%"}}/>
        <Typography className={classes.titleItem} style={isHover ? {top: "80%", left: "5%", fontSize: "150%"} : {
            top: "80%",
            left: "6%"
        }}>Complex</Typography>
    </div>

    return (
        <CanvasItem top={11} left={86} width={23} fontSize={1.5} scrollSpeed={20} className={classes.item}
                    onPointerEnter={() => setIsHover(true)} onPointerLeave={() => setIsHover(false)}
                    onPointerUp={() => setIsHover(false)}>
            <Project id="complex" cover={cover}>
                <Gallery>
                    <Carousel.Item className={style.playerCarousel}
                                   onPointerOver={handlePointerOverVideo}
                                   onPointerOut={() => setCursor(CloseCursor)}
                    >
                        <video
                            src={complexVideo}
                            type="video/mp4"
                            controls
                            autoPlay
                            loop
                            muted
                            height="100%"
                        />
                    </Carousel.Item>
                    <Carousel.Item><img src={complex} alt="Complex"/></Carousel.Item>
                    <Carousel.Item><img src={zoneb} alt="Zone B"/></Carousel.Item>
                    <Carousel.Item><img src={falcon} alt="Falcon"/></Carousel.Item>
                    <Carousel.Item><img src={whitesmall} alt="Complex"/></Carousel.Item>
                </Gallery>
            </Project>
        </CanvasItem>
    )
}

