import React from "react";
import { makeStyles } from "@material-ui/core/";
import { ButtonBase, Paper } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    paper: {
        outline: "none",
        backgroundColor: "transparent",
        boxShadow: "none",
        [theme.breakpoints.down("md")]: {
            backgroundColor: "#000",
        }
    }
}))

export default function Popup(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <>
            <ButtonBase type="button" onClick={handleOpen} disableRipple={true} >
                <img src={props.image} alt={props.alt} style={props.style} />
            </ButtonBase>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Paper className={classes.paper} onClick={handleClose}>
                        {props.children}
                    </Paper>
                </Fade>
            </Modal>
        </>
    )
}
