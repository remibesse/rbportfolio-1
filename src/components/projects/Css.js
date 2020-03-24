import { makeStyles } from "@material-ui/core/styles"

const Css = makeStyles(theme => ({
    /*Home Page*/
    titleItem: {
        position: "absolute",
        color: theme.palette.text.primary,
        fontSize: theme.spacing(3.6),
        textTransform: "uppercase",
        fontWeight: "bold",
        pointerEvents: "none",
        transition: "all .3s"
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
    /*Video Modal*/
    containerPlayer: {
        width: "1200px",
        height: "700px",
        [theme.breakpoints.down("md")]: {
            width: "100vw",
        }
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
    /*Image Modal*/
    containerImage: {
        height: "800px",
        [theme.breakpoints.down("xs")]: {
            width: "100vw",
            height: "100%"
        },
        "& img": {
            height: "100%",
            [theme.breakpoints.down("xs")]: {
                width: "100%",
            }
        }
    },
    /*Carousel Modal*/
    playerCarousel: {
        height: "800px",
    }
}))

export default Css