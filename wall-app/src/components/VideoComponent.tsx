import * as React from "react";

const videoWrapper: React.CSSProperties = {
    display: "flex",
    justifyContent: "center"
}

export const VideoComponent = (props: { source: string }) => {
    return (
        <div style={videoWrapper}>
        <video autoPlay loop height="100%" src={props.source} />
        </div>
    );
}