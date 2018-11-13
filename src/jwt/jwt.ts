import { SignOptions } from "jsonwebtoken";
import fs from "fs";

export default class Jwt {
  secret: string = "$e(re+";
  options: SignOptions = {
    algorithm: "RS256"
  };
  expireIn: number = 60 * 60;
  privateKey: any;
  publicKey: any;

  constructor() {
    this.privateKey = fs.readFileSync("./Private.key", "utf8");
    this.publicKey = fs.readFileSync("./Public.key", "utf8");
  }
}
