import { Event } from "../events/event";
import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
export declare abstract class Publisher<T extends Event> {
    private client;
    protected abstract subject: Events;
    constructor(client: Stan);
    publish(data: T): Promise<unknown>;
}
