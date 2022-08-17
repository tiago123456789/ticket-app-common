import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { TicketUpdated } from "../events/ticket-updated";
import { Listener } from "./listerner";
export declare class TicketUpdatedListener extends Listener<TicketUpdated> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: TicketUpdated): Promise<any>;
}
