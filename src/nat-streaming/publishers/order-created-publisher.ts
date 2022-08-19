import { Events } from "../events/events";
import { OrderCancelled } from "../events/order-cancelled";
import { Publisher } from "./publisher";

export class OrderCreatedPublisher extends Publisher<OrderCancelled> {
    protected subject: Events = Events.ORDER_CREATED;
}