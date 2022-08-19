"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
var Publisher = /** @class */ (function () {
    function Publisher(client) {
        this.client = client;
    }
    Publisher.prototype.publish = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.client.publish(_this.subject, JSON.stringify(data), function () {
                resolve(null);
            });
        });
    };
    return Publisher;
}());
exports.Publisher = Publisher;