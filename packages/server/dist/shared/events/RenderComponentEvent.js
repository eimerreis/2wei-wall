"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderComponentEvent = void 0;
const EventBase_1 = require("./EventBase");
class RenderComponentEvent extends EventBase_1.EventBase {
    constructor(payload) {
        super();
        this.payload = payload;
        this.validate(payload);
    }
    validate(payload) {
        if (!payload.markup) {
            throw new Error("Property 'markup' was missing in RenderComponentPayload");
        }
    }
}
exports.RenderComponentEvent = RenderComponentEvent;
RenderComponentEvent.EventId = "render-component";
//# sourceMappingURL=RenderComponentEvent.js.map