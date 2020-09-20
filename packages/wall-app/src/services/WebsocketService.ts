import { Config } from "./../config";
import io from "socket.io-client";

function timeout(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

export class WebsocketService {
	private socket: SocketIOClient.Socket;

	constructor() {
		this.socket = io.connect(Config.SocketUrl);
	}

	private waitForConnection = async() => {
		this.socket.connect();
		while (!this.socket.connected) {
			await timeout(1);
		}
		return;
	}

	ChangeSlide = async (markup: string) => {
		await this.waitForConnection();
		this.socket.emit("render-component", { markup });
		this.socket.disconnect();
	};
}
