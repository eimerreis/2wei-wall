import axios, { AxiosResponse } from "axios";
import ReactDOMServer from "react-dom/server";
import { Config } from "../config";
import { WebsocketService } from "../services/WebsocketService";
import { TableComponent } from "../components/Table";
import React from "react";
import { PastMatchesComponent } from "../components/PastMatches";
import { NextHomeGameComponent } from "../components/NextHomeGame";

let lastResults: AxiosResponse<any>;
let tableResult: AxiosResponse<any>;
let nextHomeGame: AxiosResponse<any>;

function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const ResultsAutomation = async (): Promise<any> => {
    const websocket = new WebsocketService();

    // get last results from API
    // if (!lastResults) {
    //     lastResults = await axios.get(`${Config.ApiUrl}/past-matches`);
    // }
    // websocket.ChangeSlide(ReactDOMServer.renderToStaticMarkup(<PastMatchesComponent {...lastResults.data} />))
    // await timeout(1000);

    // get current table from API
    if (!tableResult) {
        tableResult = await axios.get(`${Config.ApiUrl}/table`);
    }
    websocket.ChangeSlide(ReactDOMServer.renderToStaticMarkup(<TableComponent {...tableResult.data} />))
    await timeout(10000);

    // get next home game from API
    if (!nextHomeGame) {
        nextHomeGame = await axios.get(`${Config.ApiUrl}/next-home-game`);
    }
    websocket.ChangeSlide(ReactDOMServer.renderToStaticMarkup(<NextHomeGameComponent {...nextHomeGame.data} />))
    await timeout(10000);
}