import { Events } from "../events/events";
import { TicketCreated } from "../events/ticket-created";
import { Publisher } from "./publisher";
export declare class OrderCancelledPublisher extends Publisher<TicketCreated> {
    protected subject: Events;
}
