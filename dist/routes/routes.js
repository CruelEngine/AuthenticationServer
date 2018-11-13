"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./../schema/user");
var path = __importStar(require("path"));
var Routes = (function () {
    function Routes() {
    }
    Routes.prototype.routes = function (app) {
        app.route("/").get(function (req, res) {
            res.sendFile(path.join(__dirname, "../../dist/sample/index.html"));
        });
        app.route("/login").post(function (req, res) {
            res.status(200).send("<h1>Hello Login</h1>");
        });
        app.route("/users").post(function (req, res) {
            console.log(req.body);
            var user = req.body;
            console.log(user);
            user_1.User.create(user, function (err, user) {
                if (err) {
                    return res
                        .status(500)
                        .send("There was a problem adding information to database");
                }
                res.status(200).send(user);
            });
        });
    };
    return Routes;
}());
exports.Routes = Routes;
