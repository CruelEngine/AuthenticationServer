"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpResponseMessage = (function () {
    function HttpResponseMessage() {
    }
    HttpResponseMessage.prototype.defaultMessage = function (success, message) {
        var httpResponse = { success: success, message: message };
        return httpResponse;
    };
    HttpResponseMessage.prototype.tokenMessage = function (success, message, token) {
        var httpResponse = {
            success: success,
            message: message,
            token: token
        };
        return httpResponse;
    };
    return HttpResponseMessage;
}());
exports.HttpResponseMessage = HttpResponseMessage;
