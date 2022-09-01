import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { OrderExpirated } from "../events/order-expirated";
import { Listener } from "./listerner";

export class OrderExpiratedListener extends Listener<OrderExpirated> {
    protected ackWait: number = 30000;
    protected subject: Events;

    constructor(client: Stan, queueGroupName: string | null = null) {
        super(client, queueGroupName)
        this.subject = Events.ORDER_EXPIRATED;
    }

    protected handle(data: OrderExpirated): Promise<any> {
        if (!this.handleCallback) {
            throw new Error("Necessary informate handleCallback")
        }
        return this.handleCallback(data)
    }

}