"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const TvrPlayerService_1 = require("./tvr-players/TvrPlayerService");
const SamsApiClient_1 = require("./sams-api/SamsApiClient");
const ConfigurationReader_1 = require("./ConfigurationReader");
const RenderComponentEvent_1 = require("./../../shared/events/RenderComponentEvent");
const ChangeSlideEvent_1 = require("../../shared/events/ChangeSlideEvent");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http = __importStar(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const app = express_1.default();
app.set("port", process.env.PORT || 3001);
app.use(cors_1.default());
const config = ConfigurationReader_1.ConfigurationReader.GetConfig(process);
const apiClient = new SamsApiClient_1.SamsApiClient(config.Sams);
const tvrService = new TvrPlayerService_1.TvrPlayerService();
app.get("/api/table", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield apiClient.GetCurrentTable());
}));
app.get("/api/future-matches", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield apiClient.GetFutureMatches());
}));
app.get("/api/past-matches", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield apiClient.GetPastMatches());
}));
app.get("/api/next-home-game", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield apiClient.GetFutureMatches();
    const homeGames = games.matches.match.filter(x => x.host.id === config.Sams.TeamId);
    if (homeGames) {
        res.send(homeGames[1]);
    }
    else {
        res.send("no-home-games-anymore");
    }
}));
app.get("/api/tvr-players", (req, res) => {
    res.send(tvrService.GetPlayers());
});
const httpServer = new http.Server(app);
// set up socket.io and bind it to our
// http server.
const io = socket_io_1.default(httpServer);
app.get("/", (req, res) => {
    res.send("hallo kleiner bumsi");
});
// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function (socket) {
    console.log("a user connected");
    socket.on(ChangeSlideEvent_1.ChangeSlideEvent.EventId, (payload) => {
        console.log("change slide event received");
        io.emit(ChangeSlideEvent_1.ChangeSlideEvent.EventId, payload);
    });
    socket.on(RenderComponentEvent_1.RenderComponentEvent.EventId, (payload) => {
        console.log("change slide event with payload " + JSON.stringify(payload));
        io.emit(RenderComponentEvent_1.RenderComponentEvent.EventId, payload);
    });
});
httpServer.listen(process.env.PORT || 3001, () => {
    console.log("server is listenning");
});
//# sourceMappingURL=index.js.map