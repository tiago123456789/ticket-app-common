import { Events } from "../events/events";
import { PaymentApproved } from "../events/payment-approved";
import { Publisher } from "./publisher";

export class PaymentApprovedPublisher extends Publisher<PaymentApproved> {
    protected subject: Events = Events.PAYMENT_APPROVED;
}