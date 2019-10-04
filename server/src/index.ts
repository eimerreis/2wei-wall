import { TvrPlayerService } from './tvr-players/TvrPlayerService';
import { SamsApiClient } from './sams-api/SamsApiClient';
import { ConfigurationReader } from './ConfigurationReader';
import { RenderComponentEvent, RenderComponentPayload } from './../../shared/events/RenderComponentEvent';
import { ChangeSlideEvent, ChangeSlideEventPayload } from '../../shared/events/ChangeSlideEvent';
import express from "express";
import cors from "cors";
import * as http from "http";
import socketio from "socket.io";

const app = express();
app.set("port", process.env.PORT || 3001);
app.use(cors());

const config = ConfigurationReader.GetConfig(process);
const apiClient = new SamsApiClient(config.Sams);
const tvrService = new TvrPlayerService();

app.get("/api/table", async (req, res) => {
    res.send(await apiClient.GetCurrentTable());
})

app.get("/api/future-matches", async (req, res) => {
    res.send(await apiClient.GetFutureMatches());
})

app.get("/api/past-matches", async (req, res) => {
    res.send(await apiClient.GetPastMatches());
})

app.get("/api/next-home-game", async (req, res) => {
    const games = await apiClient.GetFutureMatches();
    const homeGames = games.matches.match.filter(x => x.host.id === config.Sams.TeamId);
    if(homeGames) {
        res.send(homeGames[0]);
    } else {
        res.send("no-home-games-anymore");
    }
})

app.get("/api/tvr-players", (req, res) => {
    res.send(tvrService.GetPlayers());
});

const httpServer = new http.Server(app);
// set up socket.io and bind it to our
// http server.
const io = socketio(httpServer);

app.get("/", (req: any, res: any) => {
    res.send("hallo kleiner bumsi");
});

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: socketio.Socket) {
    console.log("a user connected");

    socket.on(ChangeSlideEvent.EventId, (payload: ChangeSlideEventPayload) => {
        try {
            const event = new ChangeSlideEvent(payload)
        } catch(err) {
            console.error(err);
        }
    });

    socket.on(RenderComponentEvent.EventId, (payload: RenderComponentPayload) => {
        console.log("change slide event with payload " + JSON.stringify(payload));
        io.emit(RenderComponentEvent.EventId, payload);
    })
});


httpServer.listen(3001, () => {
    console.log("server is listenning");
});