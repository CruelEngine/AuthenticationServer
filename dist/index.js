"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var PORT = 3000;
var app = new app_1.default().app;
console.log(app);
app.listen(PORT, function () {
    console.log("Express Server is up and running");
});
