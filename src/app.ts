import express from "express";
import bodyParser from "body-parser";

import { Routes } from "./routes/routes";
import db from "./database/db";
import Mongoose from "./database/db";
import AuthenticationController from "./auth/AuthenticationController";

export default class App {
  public app: express.Application;
  public routes: Routes = new Routes();
  public authentication: AuthenticationController = new AuthenticationController();
  public db: Mongoose = new db();
  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
    this.authentication.Authentication(this.app);
  }

  private config(): void {
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));

    //add support for application/json type for data
    this.app.use(bodyParser.json());

    this.app.use(express.static(__dirname + "/sample/"));
  }
}
