import React, {useState } from "react";
import io from "socket.io-client";

export const RenderComponent = () => {
    const [markup, setMarkup] = useState("<h1>Hello World</h1>");
    const socket = io.connect("http://localhost:3001");

    socket.on("connect", () => {
        console.log("connected to websocket");
    })

    socket.on("render-component", (payload: { markup: string }) => {
        setMarkup(payload.markup);
    })

    return (
        <div dangerouslySetInnerHTML={{__html: markup}} />
    )
}