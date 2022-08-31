import { Event } from "./event";

export interface OrderCreated extends Event {
    id?: string;
    expiration: Date;
    ticketId: string;
}