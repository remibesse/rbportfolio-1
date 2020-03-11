import React from "react";

export default function CanvasItem(props) {
    return (
        <div className={props.className} style={{...props.style, position: "absolute", top: props.top, left: props.left}}>
            {props.children}
        </div>
    )
}