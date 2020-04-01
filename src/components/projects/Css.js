import {makeStyles} from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        }
    },
    titleItem: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: "inherit",
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none",
        transition: "all .3s",
    },

    /*Video in the Modal*/
    containerPlayer: {
        width: "1000px",
        height: "600px",
        [theme.breakpoints.only("md")]: {
            width: "100vw",
            maxHeight: "600px",
        },
        [theme.breakpoints.only("sm")]: {
            width: "100vw",
            maxHeight: "400px",
        },
        "@media (max-width: 600px)": {
            width: "100vw",
            maxHeight: "250px",
        }
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.2),
            textTransform: "uppercase",
            lineHeight: 1.2,
            "@media (max-width: 600px)": {
                fontSize: theme.spacing(1.5),
            },
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",
            }
        }
    },

    /*Image in the Modal*/
    container: {
        height: "75vh",
        width: "auto",
        display: "table-cell",
        verticalAlign: "middle",
        textAlign: "center",
        "& img": {
            maxHeight: "100%",
            maxWidth: "100%",
        }
    }
}))

export default Css