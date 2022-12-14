"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Events = void 0;
var Events;
(function (Events) {
    Events["ORDER_EXPIRATED"] = "order:expirated";
    Events["ORDER_CANCELLED"] = "order:cancelled";
    Events["ORDER_CREATED"] = "order:created";
    Events["TICKET_CREATED"] = "ticket:created";
    Events["TICKET_UPDATED"] = "ticket:updated";
    Events["PAYMENT_APPROVED"] = "payment:approved";
})(Events = exports.Events || (exports.Events = {}));
