"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var user_1 = require("../schema/user");
var Error_1 = require("../Enums/Error");
var config_1 = require("../jwt/config");
var AuthenticationController = (function () {
    function AuthenticationController() {
    }
    AuthenticationController.prototype.Authentication = function (app) {
        app.route("/register").post(function (req, res) {
            var user = req.body;
            var hashedPassword = bcryptjs_1.default.hashSync(user.password, 8);
            user.password = hashedPassword;
            user_1.User.create(user, function (err, user) {
                console.log(user);
                if (err)
                    return res.status(500).send(Error_1.Error.REGISTRATION_ERROR);
                var token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.Secret.KEY);
                res.status(200).json({
                    success: true,
                    message: 'Auth Success',
                    token: token
                });
            });
        });
    };
    return AuthenticationController;
}());
exports.default = AuthenticationController;
