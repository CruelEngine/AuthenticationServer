import express from "express";
import bodyParser from "body-parser";

export default class App {
  public app: any;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    //add support for application/json type for data
    this.app.use(bodyParser.json());

    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}
