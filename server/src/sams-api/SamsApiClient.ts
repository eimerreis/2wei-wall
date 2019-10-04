import axios from "axios";

import { TableResponse } from './types/TableResponse';

export class SamsApiClient {
    private baseUrl = ""

    constructor(private apiKey: string) {}

    private appendApiKey = (url:string) => {
        if(url.includes("?")) {
            return url + "&apiKey" + this.apiKey;
        }
        return url + "?apiKey" + this.apiKey;
    }

    GetCurrentTable = async (): TableResponse => {
        const url = "/"
        const response = axios.get("")
    }
}