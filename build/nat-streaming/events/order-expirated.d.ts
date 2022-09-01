import { Event } from "./event";
export interface OrderExpirated extends Event {
    id?: string;
    expiration: Date;
    ticketId: string;
}
