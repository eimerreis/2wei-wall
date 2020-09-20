import { PastMatchesResponse } from './types/PastMatchesResponse';
import { MatchesResponse } from './types/MatchesResponse';
import axios from "axios";
import parser from "xml2json";

import { TableResponse } from './types/TableResponse';
import { SamsConfig } from "../ConfigurationReader";

export class SamsApiClient {
    private baseUrl = ""

    constructor(private config: SamsConfig) {}

    private getJsonResponse = (xmlResponse: string) => {
        return JSON.parse(parser.toJson(xmlResponse));
    }

    GetCurrentTable = async (): Promise<TableResponse> => {
        const url = `${this.config.ApiUrl}/rankings.xhtml?apiKey=${this.config.ApiKey}&matchSeriesId=${this.config.MatchSeriesId}`;
        const response = await axios.get(url, { responseType: "document"});
        return this.getJsonResponse(response.data);
    }

    GetFutureMatches = async (): Promise<MatchesResponse> => {
        const { ApiUrl, ApiKey, TeamId } = this.config;
        const url = `${ApiUrl}/matches.xhtml?apiKey=${ApiKey}&future=true&teamId=${TeamId}`;
        const response = await axios.get(url, {responseType: "document"});
        return this.getJsonResponse(response.data);
    }

    GetPastMatches = async (): Promise<PastMatchesResponse> => {
        const { ApiUrl, ApiKey, TeamId } = this.config;
        const url = `${ApiUrl}/matches.xhtml?apiKey=${ApiKey}&past=true&teamId=${TeamId}`;
        const response = await axios.get(url, {responseType: "document"});
        return this.getJsonResponse(response.data);
    }
}