import React, { useState } from "react"
import { makeStyles } from "@material-ui/core"
import { ButtonBase, Paper } from "@material-ui/core"
import Modal from "@material-ui/core/Modal"
import Fade from "@material-ui/core/Fade"

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#000",
        }
    },
    paper: {
        outline: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
    },
    title: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3.6),
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none"
    },
    hoverTitle: {
        fontSize: theme.spacing(6),
    }
}))

export default function Popup(props) {
    const classes = useStyles();

    const [isHover, setIsHover] = useState(false)

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <ButtonBase type="button" {...props} onClick={handleOpen} disableRipple={true} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
                <img src={props.image} alt={props.alt} height={props.height} />
            </ButtonBase>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open} timeout={700}>
                    <Paper className={classes.paper} onClose={handleClose}>
                        {props.children}
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}
