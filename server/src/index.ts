import express from "express";
import * as http from "http";

const app = express();
app.set("port", process.env.PORT || 3001);

const httpServer = new http.Server(app);

app.get("/", (req: any, res: any) => {
    res.send("hallo kleiner bumsi");
});

httpServer.listen(3001, () => {
    console.log("server is listenning");
});