import { User, IUserModel } from "./../schema/user";
import { Request, Response, Errback } from "express";
import * as path from "path";
import AuthenticationController from "../auth/AuthenticationController";

export class Routes {
  authController: AuthenticationController;
  constructor() {
    this.authController = new AuthenticationController();
  }

  public routes(app: any): void {
    this.authController.Authentication(app);

    app.route("/").get((req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../../dist/sample/index.html"));
    });

    app.route("/login").post((req: Request, res: Response) => {
      res.status(200).send("<h1>Hello Login</h1>");
    });

    app.route("/users").post((req: Request, res: Response) => {
      console.log(req.body);
      let user: IUserModel = req.body;
      console.log(user);
      User.create(user, (err: Errback, user: IUserModel) => {
        if (err) {
          return res
            .status(500)
            .send("There was a problem adding information to database");
        }
        res.status(200).send(user);
      });
    });
  }
}
