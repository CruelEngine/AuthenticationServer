"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var Jwt = (function () {
    function Jwt() {
        this.secret = "$e(re+";
        this.options = {
            algorithm: "RS256"
        };
        this.expireIn = 60 * 60;
        this.privateKey = fs_1.default.readFileSync("./Private.key", "utf8");
        this.publicKey = fs_1.default.readFileSync("./Public.key", "utf8");
    }
    return Jwt;
}());
exports.default = Jwt;
