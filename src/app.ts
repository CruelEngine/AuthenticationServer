import express from "express";
import bodyParser from "body-parser";

import { Routes } from "./routes";

export default class App {
  public app: express.Application;
  public routes: Routes = new Routes();
  constructor() {
    this.app = express();
    this.routes.routes(this.app);
    this.config();
  }

  private config(): void {
    //add support for application/json type for data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
