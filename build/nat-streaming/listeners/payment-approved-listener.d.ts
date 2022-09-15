import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { PaymentApproved } from "../events/payment-approved";
import { Listener } from "./listerner";
export declare class PaymentApprovedListener extends Listener<PaymentApproved> {
    protected ackWait: number;
    protected subject: Events;
    constructor(client: Stan, queueGroupName?: string | null);
    protected handle(data: PaymentApproved): Promise<any>;
}
