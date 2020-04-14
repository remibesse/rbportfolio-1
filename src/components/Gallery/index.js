import React, {cloneElement, useEffect, useState} from "react"
import {makeStyles} from "@material-ui/core/styles"
import prevArrow from "./assets/prevArrow.svg"
import nextArrow from "./assets/nextArrow.svg"
import indicators from "./assets/indicators.svg"
import {Page} from "framer"

const useStyles = makeStyles(theme => ({
    gallery: {
        display: "flex",
        alignItems: "center",
        maxHeight: "85vh",
        height: "auto",
        maxWidth: "100%",
        "& [data-framer-component-type='Frame']": {
            position: "relative",
            alignItems: "center",
            height: "85vh !important",
            width: "60vw !important",
            overflow: "visible !important",
            "@media only screen and (max-width: 600px)": {
                width: "100vw !important",
                overflow: "hidden"
            }
        }
    },
    inactiveItem: {
        transform: "scale(0.7)",
        transition: "all 0.6s",
        opacity: "0.4"
    },
    controls: {
        height: "90px",
        "@media only screen and (max-width: 600px) and (pointer: coarse)":
            {
                display: "none"
            },
    },
    prevArrow: props => ({
        visibility: props.currentPage === 0 ? "hidden" : "visible",
        zIndex: "100",
        opacity: 0.5,
        padding: theme.spacing(2, 2.5),
        margin: theme.spacing(4),
        "&:hover": {
            opacity: 1
        },
        "@media only screen and (max-width: 600px)": {
            position: "fixed",
            left: "10px",
        },
    }),
    nextArrow: props => ({
        visibility: props.currentPage === props.pageCount - 1 ? "hidden" : "visible",
        zIndex: "100",
        opacity: 0.5,
        padding: theme.spacing(2, 2.5),
        margin: theme.spacing(4),
        "&:hover": {
            opacity: 1
        },
        "@media only screen and (max-width: 600px)": {
            position: "fixed",
            right: "10px"
        },
    }),
    IndicatorsWrapper: {
        textAlign: "center",
    },
    indicators: props => ({
        width: "4px",
        height: "4px",
        marginRight: "2px",
        marginLeft: "2px",
        "@media only screen and (min-width: 600px)": {
            display: "none",
        },
    })
}))

export default function Gallery(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const classes = useStyles({currentPage, pageCount: props.children.length})
    const nextItem = () => setCurrentPage(Math.min(currentPage + 1, props.children.length - 1))
    const prevItem = () => setCurrentPage(Math.max(currentPage - 1, 0))

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [currentPage])

    const handleKeyDown = e => {
        if (e.key === "ArrowRight") nextItem()
        else if (e.key === "ArrowLeft") prevItem()
    }

    return (
        <>
            <div className={classes.gallery}>
                <img src={prevArrow} alt="prev" onClick={prevItem}
                     className={`${classes.controls} ${classes.prevArrow}`}/>
                <Page currentPage={currentPage}
                      onChangePage={(current, previous) => setCurrentPage(current)}
                      alignment="center">
                    {props.children.map((child, i) => cloneElement(child, {className: i !== currentPage ? classes.inactiveItem : undefined}))}
                </Page>
                <img src={nextArrow} alt="next" onClick={nextItem}
                     className={`${classes.controls} ${classes.nextArrow}`}/>
            </div>
            <div className={classes.IndicatorsWrapper}>
                {props.children.map((child, i) => <img src={indicators} alt="dot" className={classes.indicators}
                                                       style={i === currentPage ? {opacity: "1"} : {opacity: "0.5"}}/>)}
            </div>
        </>
    )
}