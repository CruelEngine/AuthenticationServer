import { HttpResponseMessage } from "./../Response/http-response-message";
import { ILogin } from "./../interfaces/login";
import { IUserModel } from "./../schema/user";
import { IUser } from "./../interfaces/user";
import { Request, Application, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../schema/user";
import { Errback } from "express-serve-static-core";
import { Error } from "../Enums/Error";
import { Secret } from "../jwt/config";

export default class AuthenticationController {
  public Authentication(app: Application) {
    let httpResponseMessage = new HttpResponseMessage();

    app.route("/register").post((req: Request, res: Response) => {
      let user: IUser = req.body;
      let hashedPassword = bcrypt.hashSync(user.password, 8);
      user.password = hashedPassword;

      User.create(user, (err: Errback, user: IUserModel) => {
        if (err) return res.status(500).send(Error.REGISTRATION_ERROR);
        let token = jwt.sign({ id: user._id }, Secret.KEY);
        res
          .status(200)
          .json(httpResponseMessage.tokenMessage(true, "Auth Success", token));
      });
    });

    app.route("/login").post((req: Request, res: Response) => {
      let loginUser: ILogin = req.body;
      console.log(loginUser);
      User.findOne({ email: loginUser.email }, (err, user: IUserModel) => {
        bcrypt.compare(
          loginUser.password,
          user.password,
          (err: any, success: boolean) => {
            if (success) {
              return res
                .status(200)
                .json(
                  httpResponseMessage.tokenMessage(
                    true,
                    "Authorised",
                    jwt.sign({ id: user._id }, Secret.KEY)
                  )
                );
            }
            return res
              .status(400)
              .json(
                httpResponseMessage.defaultMessage(false, "UnAuthorised Access")
              );
          }
        );
      });
    });
  }
}
