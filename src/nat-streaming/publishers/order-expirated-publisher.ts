import { Events } from "../events/events";
import { OrderExpirated } from "../events/order-expirated";
import { Publisher } from "./publisher";

export class OrderExpiratedPublisher extends Publisher<OrderExpirated> {
    protected subject: Events = Events.ORDER_EXPIRATED;
}