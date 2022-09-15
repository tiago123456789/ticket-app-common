import { Event } from "./event";

export interface PaymentApproved extends Event {
    orderId: string,
}