import { Event } from "./event";

export interface OrderCancelled extends Event {
    id?: string,
    status: string;
    userId: string;
    price: Number;
    ticketId: string;
}