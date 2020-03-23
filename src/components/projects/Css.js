import { makeStyles } from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    title: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3.6),
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none",
        transition: "all .3s"
    },
    caption: {
        "& .MuiTypography-root": {
            fontSize: theme.spacing(2.5),
            textTransform: "uppercase",
            lineHeight: 1.2,
            "&:first-child": {
                padding: theme.spacing(1, 0),
                fontWeight: "bold",
            }
        }
    },
    item: {
        transition: "opacity 1s",
        "&:hover": {
            opacity: 1,
            zIndex: 1000
        },
        "&:not(:hover)": {
            opacity: .7
        },
    },
    containerImage: {
        height: theme.spacing(100),
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "100%"
        },
        "& img": {
            height: "100%",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            },
        }
    }
}))

export default Css