"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TvrPlayerService = void 0;
const players_json_1 = __importDefault(require("./players.json"));
class TvrPlayerService {
    constructor() {
        this.GetPlayers = () => {
            return players_json_1.default;
        };
    }
}
exports.TvrPlayerService = TvrPlayerService;
//# sourceMappingURL=TvrPlayerService.js.map