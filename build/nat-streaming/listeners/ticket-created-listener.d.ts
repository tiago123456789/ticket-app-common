import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { TicketCreated } from "../events/ticket-created";
import { Listener } from "./listerner";
export declare class TicketCreatedListener extends Listener<TicketCreated> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: TicketCreated): Promise<any>;
}
