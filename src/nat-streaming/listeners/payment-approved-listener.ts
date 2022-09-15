import { Stan } from "node-nats-streaming";
import { Events } from "../events/events";
import { PaymentApproved } from "../events/payment-approved";
import { Listener } from "./listerner";

export class PaymentApprovedListener extends Listener<PaymentApproved> {
    protected ackWait: number = 30000;
    protected subject: Events;

    constructor(client: Stan, queueGroupName: string | null = null) {
        super(client, queueGroupName)
        this.subject = Events.PAYMENT_APPROVED;
    }

    protected handle(data: PaymentApproved): Promise<any> {
        if (!this.handleCallback) {
            throw new Error("Necessary informate handleCallback")
        }
        return this.handleCallback(data)
    }

}