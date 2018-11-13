import { IUser } from "./../interfaces/user";
import { Request, Application, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../schema/user";
import { Errback } from "express-serve-static-core";
import { Error } from "../Enums/Error";
import { Secret } from '../jwt/config'

export default class AuthenticationController {
  public Authentication(app: Application) {
    app.route("/register").post((req: Request, res: Response) => {
      let user: IUser = req.body;
      let hashedPassword = bcrypt.hashSync(user.password, 8);

      User.create(user, (err: Errback, user: IUser) => {
        if (err) return res.status(500).send(Error.REGISTRATION_ERROR);
        let token = jwt.sign({ id : user._id},Secret.KEY)
        res.status(200).send("Registered Successfully");
      });
    });
  }
}
