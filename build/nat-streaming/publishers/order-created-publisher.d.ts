import { Events } from "../events/events";
import { OrderCancelled } from "../events/order-cancelled";
import { Publisher } from "./publisher";
export declare class OrderCreatedPublisher extends Publisher<OrderCancelled> {
    protected subject: Events;
}
