import { User, IUserModel } from "./../schema/user";
import { Request, Response, Errback } from "express";
import * as path from "path";

export class Routes {
  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "../../dist/sample/index.html"));
    });

    app.route("/login").post((req: Request, res: Response) => {
      res.status(200).send("<h1>Hello Login</h1>");
    });

    app.route("/user").post((req: Request, res: Response) => {
      let user: IUserModel = JSON.parse(req.body);
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
