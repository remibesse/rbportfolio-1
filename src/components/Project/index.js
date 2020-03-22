import React, { useState, useContext, useEffect } from "react"
import { Route, Link, useHistory } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import { DefaultCursor, CloseCursor, CursorContext } from "../Cursor"
import { ScrollContext } from "../CanvasScroll"
import Backdrop from "@material-ui/core/Backdrop"
import { Paper } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
    },
    backdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        [theme.breakpoints.down("sm")]: {
            backgroundColor: "#000",
        }
    },
    paper: {
        outline: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    imagesEffect: {
        overflow: "hidden",
        maxHeight: "600px;",
        "& img": {
            transition: "all 0.4s",
        },
        "& img:hover": {
            transform: "scale(1.04)"
        }
    }
}))

export default function Project(props) {
    const classes = useStyles()
    return (
        <>
            <Link to={`/project/${props.id}`} >
                <div className={classes.imagesEffect}>
                    <img src={props.image} alt={props.alt} height={props.height} />
                </div>
            </Link>
            <Route path={`/project/${props.id}`}>
                <Popup>{props.children}</Popup>
            </Route>
        </>
    )
}

function Popup(props) {
    const classes = useStyles()
    const history = useHistory()
    const [open, setOpen] = useState(false)
    const setCursor = useContext(CursorContext)
    const setScrollEnabled = useContext(ScrollContext)
    const fadeDuration = 700

    useEffect(() => {
        setOpen(true)
        setScrollEnabled(false)
        setCursor(CloseCursor)
    }, [])
    const handleClose = () => {
        setScrollEnabled(true)
        setCursor(DefaultCursor)
        setOpen(false)
        setTimeout(() => history.push("/home"), fadeDuration)
    }

    return (
        <Modal
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: fadeDuration, className: classes.backdrop }}
        >
            <Fade in={open} timeout={fadeDuration}>
                <Paper className={classes.paper} onClose={handleClose} onMouseOver={() => setCursor(DefaultCursor)} onMouseOut={() => setCursor(CloseCursor)}>
                    {props.children}
                </Paper>
            </Fade>
        </Modal>
    )
}