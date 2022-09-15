import { Events } from "../events/events";
import { PaymentApproved } from "../events/payment-approved";
import { Publisher } from "./publisher";
export declare class PaymentApprovedPublisher extends Publisher<PaymentApproved> {
    protected subject: Events;
}
