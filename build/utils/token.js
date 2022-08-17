"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenUtils = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var TokenUtils = /** @class */ (function () {
    function TokenUtils() {
    }
    TokenUtils.prototype.get = function (payload) {
        // @ts-ignore
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
    };
    TokenUtils.prototype.decode = function (token) {
        // @ts-ignore
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    };
    return TokenUtils;
}());
exports.TokenUtils = TokenUtils;
