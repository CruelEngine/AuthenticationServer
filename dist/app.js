"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes/routes");
var App = (function () {
    function App() {
        this.routes = new routes_1.Routes();
        this.app = express_1.default();
        this.routes.routes(this.app);
        this.config();
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map