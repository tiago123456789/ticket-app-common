import { Event } from "./event";

export interface OrderCreated extends Event {
    id?: string;
    status: string;
    userId: string;
    price: Number;
    expiration: Date;
    ticketId: string;
}