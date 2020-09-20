"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SamsApiClient = void 0;
const axios_1 = __importDefault(require("axios"));
const xml2json_1 = __importDefault(require("xml2json"));
class SamsApiClient {
    constructor(config) {
        this.config = config;
        this.baseUrl = "";
        this.getJsonResponse = (xmlResponse) => {
            return JSON.parse(xml2json_1.default.toJson(xmlResponse));
        };
        this.GetCurrentTable = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.config.ApiUrl}/rankings.xhtml?apiKey=${this.config.ApiKey}&matchSeriesId=${this.config.MatchSeriesId}`;
            const response = yield axios_1.default.get(url, { responseType: "document" });
            return this.getJsonResponse(response.data);
        });
        this.GetFutureMatches = () => __awaiter(this, void 0, void 0, function* () {
            const { ApiUrl, ApiKey, TeamId } = this.config;
            const url = `${ApiUrl}/matches.xhtml?apiKey=${ApiKey}&future=true&teamId=${TeamId}`;
            const response = yield axios_1.default.get(url, { responseType: "document" });
            return this.getJsonResponse(response.data);
        });
        this.GetPastMatches = () => __awaiter(this, void 0, void 0, function* () {
            const { ApiUrl, ApiKey, TeamId } = this.config;
            const url = `${ApiUrl}/matches.xhtml?apiKey=${ApiKey}&past=true&teamId=${TeamId}`;
            const response = yield axios_1.default.get(url, { responseType: "document" });
            return this.getJsonResponse(response.data);
        });
    }
}
exports.SamsApiClient = SamsApiClient;
//# sourceMappingURL=SamsApiClient.js.map