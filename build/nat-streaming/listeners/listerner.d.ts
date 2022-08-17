import { Stan } from "node-nats-streaming";
import { Event } from "../events/event";
import { Events } from "../events/events";
export declare abstract class Listener<T extends Event> {
    protected queueGroupName: string | null;
    protected abstract subject: Events;
    protected abstract ackWait: number;
    private subscribe;
    private client;
    protected handleCallback: CallableFunction | undefined;
    constructor(client: Stan, queueGroupName: string | null);
    setHandleCallback(callback: CallableFunction): this;
    listen(): void;
    protected abstract handle(data: T): Promise<any>;
}
