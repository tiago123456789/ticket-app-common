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
exports.TicketCreatedListener = void 0;
var events_1 = require("../events/events");
var listerner_1 = require("./listerner");
var TicketCreatedListener = /** @class */ (function (_super) {
    __extends(TicketCreatedListener, _super);
    function TicketCreatedListener(client, queueGroupName) {
        if (queueGroupName === void 0) { queueGroupName = null; }
        var _this = _super.call(this, client, queueGroupName) || this;
        _this.ackWait = 30000;
        _this.subject = events_1.Events.TICKET_CREATED;
        return _this;
    }
    TicketCreatedListener.prototype.handle = function (data) {
        if (!this.handleCallback) {
            throw new Error("Necessary informate handleCallback");
        }
        return this.handleCallback(data);
    };
    return TicketCreatedListener;
}(listerner_1.Listener));
exports.TicketCreatedListener = TicketCreatedListener;
