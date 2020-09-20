"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeSlideEvent = void 0;
const EventBase_1 = require("./EventBase");
class ChangeSlideEvent extends EventBase_1.EventBase {
    constructor(payload) {
        super();
        this.payload = payload;
        this.validate(payload);
    }
    validate(payload) {
        if (!payload.id) {
            throw new Error("Property 'id' of ChangeSlideEventPayload is missing or invalid");
        }
    }
}
exports.ChangeSlideEvent = ChangeSlideEvent;
ChangeSlideEvent.EventId = "change-slide";
//# sourceMappingURL=ChangeSlideEvent.js.map