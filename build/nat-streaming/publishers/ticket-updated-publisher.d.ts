import { Publisher } from "./publisher";
import { TicketUpdated } from "../events/ticket-updated";
import { Events } from "../events/events";
export declare class TicketUpdatedPublisher extends Publisher<TicketUpdated> {
    protected subject: Events;
}
