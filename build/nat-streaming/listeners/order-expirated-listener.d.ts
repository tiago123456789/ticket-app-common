import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { OrderExpirated } from "../events/order-expirated";
import { Listener } from "./listerner";
export declare class OrderExpiratedListener extends Listener<OrderExpirated> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: OrderExpirated): Promise<any>;
}
