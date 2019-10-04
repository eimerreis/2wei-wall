import { ChangeSlideEvent, ChangeSlideEventPayload } from '../../shared/events/ChangeSlideEvent';
import express from "express";
import * as http from "http";
import socketio from "socket.io";

const app = express();
app.set("port", process.env.PORT || 3001);

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
});


httpServer.listen(3001, () => {
    console.log("server is listenning");
});