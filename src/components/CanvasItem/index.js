import React from "react";

export default function CanvasItem(props) {
    return (
        <div style={{...props.style, position: "absolute", top: props.top, left: props.left, zIndex: props.zIndex}}>
            {props.children}
        </div>
    )
}