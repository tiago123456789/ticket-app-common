import { Events } from "../events/events";
import { OrderCreated } from "../events/order-created";
import { Publisher } from "./publisher";
export declare class OrderCancelledPublisher extends Publisher<OrderCreated> {
    protected subject: Events;
}
