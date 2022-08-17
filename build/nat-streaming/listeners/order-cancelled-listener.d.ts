import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { OrderCancelled } from "../events/order-cancelled";
import { Listener } from "./listerner";
export declare class OrderCancelledListener extends Listener<OrderCancelled> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: OrderCancelled): Promise<any>;
}
