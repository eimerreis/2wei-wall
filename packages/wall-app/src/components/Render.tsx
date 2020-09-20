import React, { useState } from "react";
import io from "socket.io-client";
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";


const Wrapper = styled.div<{ visible: boolean }>`
    transition: .5s ease-in-out;
    opacity: ${(props) => props.visible ? 1 : 0};
`;


const socket = io.connect("http://localhost:3001");
export class RenderComponent extends React.Component {
    readonly state = {
        markup: "<h1>Hello World</h1>",
        visible: false,
        activePage: "home"
    }

    constructor(props: any) {
        super(props);

        socket.on("connect", () => {
            console.log("connected to websocket");
        })

        socket.on("render-component", (payload: { markup: string }) => {
            this.setState({ visible: false });
            setTimeout(() => {
                this.setState({ visible: true, markup: payload.markup });
            }, 500);
        })
    }

    render() {
        return (
            <AnimatePresence>
                {this.state.activePage === "home" && <HomePage />}
                {this.state.activePage === "players" && <PlayersPage />}
            </AnimatePresence>

            // <Wrapper visible={this.state.visible} dangerouslySetInnerHTML={{ __html: this.state.markup }} />
        )
    }
}

const Pages = [
    { key: "home", component: "" }
]

const HomePage = () => <motion.div
    key="home"
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
>
    Home Page
</motion.div >

const PlayersPage = () => <motion.div
    key="players"
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -300, opacity: 0 }}
>
    Home Page
</motion.div>