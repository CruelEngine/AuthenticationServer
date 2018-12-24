"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_response_message_1 = require("./../Response/http-response-message");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var user_1 = require("../schema/user");
var Error_1 = require("../Enums/Error");
var config_1 = require("../jwt/config");
var AuthenticationController = (function () {
    function AuthenticationController() {
    }
    AuthenticationController.prototype.Authentication = function (app) {
        var httpResponseMessage = new http_response_message_1.HttpResponseMessage();
        app.route("/register").post(function (req, res) {
            var user = req.body;
            var hashedPassword = bcryptjs_1.default.hashSync(user.password, 8);
            user.password = hashedPassword;
            user_1.User.create(user, function (err, user) {
                if (err)
                    return res.status(500).send(Error_1.Error.REGISTRATION_ERROR);
                var token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.Secret.KEY);
                res
                    .status(200)
                    .json(httpResponseMessage.tokenMessage(true, "Auth Success", token));
            });
        });
        app.route("/login").post(function (req, res) {
            var loginUser = req.body;
            console.log(loginUser);
            user_1.User.findOne({ email: loginUser.email }, function (err, user) {
                bcryptjs_1.default.compare(loginUser.password, user.password, function (err, success) {
                    if (success) {
                        return res
                            .status(200)
                            .json(httpResponseMessage.tokenMessage(true, "Authorised", jsonwebtoken_1.default.sign({ id: user._id }, config_1.Secret.KEY)));
                    }
                    return res
                        .status(400)
                        .json(httpResponseMessage.defaultMessage(false, "UnAuthorised Access"));
                });
            });
        });
    };
    return AuthenticationController;
}());
exports.default = AuthenticationController;
