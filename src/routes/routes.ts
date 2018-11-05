import { Request, Response } from "express";

export class Routes {
  public routes(app: any): void {
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send("<h1>Hello world</h1>");
    });

    app.route("/login").post((req: Request, res: Response) => {
      res.status(200).send("<h1>Hello Login</h1>");
    });
  }
}
