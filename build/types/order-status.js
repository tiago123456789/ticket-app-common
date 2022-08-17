"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatus = void 0;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["CREATED"] = "created";
    OrderStatus["CANCELLED"] = "cancelled";
    OrderStatus["AWAITING_PAYMENT"] = "awaiting:payment";
    OrderStatus["COMPLETE"] = "COMPLETE";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
