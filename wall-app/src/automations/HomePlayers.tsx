import React from "react";
import ReactDOMServer from "react-dom/server";
import axios from "axios";

import { Config } from "../config";
import { Player, PlayerComponent } from "../components/Player";
import { WebsocketService } from "../services/WebsocketService";

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let players: Player[] = [];

export const HomePlayersAutomation = async () => {
    // get home players via API
    const url = `${Config.ApiUrl}/tvr-players`;
    if(players.length === 0) {
        players = (await axios.get(url)).data as Player[];
    }

    const websocket = new WebsocketService();
    for (const player of players) {
        const markup = ReactDOMServer.renderToStaticMarkup(<PlayerComponent {...player} />);
        websocket.ChangeSlide(markup);
        await timeout(5000);
    }
    return true;
}