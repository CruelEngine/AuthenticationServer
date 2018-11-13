import mongoose from "mongoose";

export default class Mongoose {
  constructor() {
    let user: string = "test";
    let password: string = "test123";
    this.connect(
      user,
      password
    );
  }

  getUrl(user: string, password: string) {
    return `mongodb://${user}:${password}@ds253243.mlab.com:53243/jwt-proto`;
  }

  connect(user: string, password: string) {
    mongoose.connect(
      this.getUrl(user, password),
      { useNewUrlParser: true }
    );
  }
}
