"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.status(200).send("<h1>Hello world</h1>");
        });
        app.route("/login").post(function (req, res) {
            res.status(200).send("<h1>Hello Login</h1>");
        });
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map