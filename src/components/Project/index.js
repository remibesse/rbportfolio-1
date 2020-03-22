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
    }
}))

export default function Project(props) {
    return (
        <>
            <Link to={`/project/${props.id}`}>
                <img src={props.image} alt={props.alt} height={props.height} />
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
        return () => {
            setOpen(false)
            setScrollEnabled(true)
            setCursor(DefaultCursor)
        }
    })
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