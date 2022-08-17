import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { OrderCreated } from "../events/order-created";
import { Listener } from "./listerner";
export declare class OrderCreatedListener extends Listener<OrderCreated> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: OrderCreated): Promise<any>;
}
