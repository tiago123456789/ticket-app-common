"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = void 0;
var handleException = function (error, request, response, next) {
    if (error.name === 'ValidationError') {
        return response.status(400).json({
            statusCode: 400,
            // @ts-ignore
            error: error.errors
        });
    }
    if (error.name === 'InvalidDataException') {
        return response.status(400).json({
            statusCode: 400,
            // @ts-ignore
            error: [error.message]
        });
    }
    if (error.name === 'NotFoundException') {
        return response.status(404).json({
            statusCode: 404,
            // @ts-ignore
            error: [error.message]
        });
    }
    if (error.name === "BusinessLogicException") {
        return response.status(409).json({
            statusCode: 409,
            // @ts-ignore
            error: [error.message]
        });
    }
    console.log(error);
    response.status(500).json({
        statusCode: 500,
        error: "Internal server error"
    });
};
exports.handleException = handleException;
