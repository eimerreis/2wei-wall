import { EventBase } from "./EventBase";

export interface RenderComponentPayload {
    markup: string;
}

export class RenderComponentEvent extends EventBase<RenderComponentPayload> {
    public static EventId = "render-component";

    validate(payload: RenderComponentPayload) {
        if(!payload.markup) {
            throw new Error("Property 'markup' was missing in RenderComponentPayload");
        }
    }

    constructor(public payload: RenderComponentPayload) {
        super();
        this.validate(payload);
    }
}