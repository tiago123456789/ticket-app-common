"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentApprovedPublisher = void 0;
var events_1 = require("../events/events");
var publisher_1 = require("./publisher");
var PaymentApprovedPublisher = /** @class */ (function (_super) {
    __extends(PaymentApprovedPublisher, _super);
    function PaymentApprovedPublisher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subject = events_1.Events.PAYMENT_APPROVED;
        return _this;
    }
    return PaymentApprovedPublisher;
}(publisher_1.Publisher));
exports.PaymentApprovedPublisher = PaymentApprovedPublisher;
