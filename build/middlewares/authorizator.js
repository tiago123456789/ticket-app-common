"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizator = void 0;
var cookie_1 = require("../utils/cookie");
var token_1 = require("../utils/token");
var cookieUtils = new cookie_1.CookieUtils();
var tokenUtils = new token_1.TokenUtils();
var authorizator = function (request, response, next) {
    // @ts-ignore
    var accessToken = cookieUtils.getValueByKey("accessToken", request.headers.cookie);
    // @ts-ignore
    accessToken = accessToken || request.headers.authorization;
    if (!accessToken) {
        return response.status(401).json({
            statusCode: 401,
            error: "You need informate accessToken"
        });
    }
    // @ts-ignore
    accessToken = accessToken === null || accessToken === void 0 ? void 0 : accessToken.replace("Bearer ", "");
    try {
        // @ts-ignore
        var payload = tokenUtils.decode(accessToken);
        if (!payload) {
            return response.status(403).json({
                statusCode: 403,
                error: "Your accessToken informated is invalid or expired"
            });
        }
        // @ts-ignore
        request.userId = payload.id;
        return next();
    }
    catch (error) {
        response.status(403).json({
            statusCode: 403,
            error: "Your accessToken informated is invalid or expired"
        });
    }
};
exports.authorizator = authorizator;
