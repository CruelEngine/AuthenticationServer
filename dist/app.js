"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes/routes");
var db_1 = __importDefault(require("./database/db"));
var AuthenticationController_1 = __importDefault(require("./auth/AuthenticationController"));
var App = (function () {
    function App() {
        this.routes = new routes_1.Routes();
        this.authentication = new AuthenticationController_1.default();
        this.db = new db_1.default();
        this.app = express_1.default();
        this.config();
        this.routes.routes(this.app);
        this.authentication.Authentication(this.app);
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.static(__dirname + "/sample/"));
    };
    return App;
}());
exports.default = App;
