import { EventBase } from "./EventBase";

export interface ChangeSlideEventPayload {
    id: string;
    number?: string;
}

export class ChangeSlideEvent extends EventBase<ChangeSlideEventPayload> {
    public static EventId = "change-slide";

    validate(payload: ChangeSlideEventPayload) {
        if(!payload.id) {
            throw new Error("Property 'id' of ChangeSlideEventPayload is missing or invalid");
        }
    }

    constructor(public payload: ChangeSlideEventPayload) {
        super();
        this.validate(payload);
    }
}