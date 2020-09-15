import * as React from "react";

const ImageStyle: React.CSSProperties = {
    height: "100%",
    width: "100%",
    objectFit: "cover",
    objectPosition: "bottom"
}

const wrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center"
}

export const ImageComponent = (props: { image: string}) => {
    return (
        <div style={wrapperStyle}>
            <img style={ImageStyle} src={props.image} />
        </div>
    )
}