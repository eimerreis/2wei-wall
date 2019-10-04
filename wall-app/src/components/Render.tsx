import React, {useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";


const Wrapper = styled.div<{ visible: boolean }>`
    transition: .5s ease-in-out;
    opacity: ${(props) => props.visible ? 1 : 0};
`;


const socket = io.connect("http://localhost:3001");
export class RenderComponent extends React.Component {
    readonly state = {
        markup: "<h1>Hello World</h1>",
        visible: false
    }
    
    constructor(props: any) {
        super(props);

        socket.on("connect", () => {
            console.log("connected to websocket");
        })
    
        socket.on("render-component", (payload: { markup: string }) => {
            this.setState({ visible: false });
            setTimeout(() => {
                this.setState({ visible: true, markup: payload.markup });    
            }, 500);
        })
    }

    render() {
        return (
            <Wrapper visible={this.state.visible} dangerouslySetInnerHTML={{__html: this.state.markup}} />
        )
    }
}