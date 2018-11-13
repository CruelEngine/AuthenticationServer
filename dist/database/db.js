"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Mongoose = (function () {
    function Mongoose() {
        var user = "test";
        var password = "test123";
        this.connect(user, password);
    }
    Mongoose.prototype.getUrl = function (user, password) {
        return "mongodb://" + user + ":" + password + "@ds253243.mlab.com:53243/jwt-proto";
    };
    Mongoose.prototype.connect = function (user, password) {
        mongoose_1.default.connect(this.getUrl(user, password), { useNewUrlParser: true });
    };
    return Mongoose;
}());
exports.default = Mongoose;
