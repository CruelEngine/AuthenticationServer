import { Document, Schema, Model, model } from "mongoose";
import { IUser } from "../interfaces/user";

export interface IUserModel extends IUser, Document {
  fullName(): string;
}

export var UserSchema: Schema = new Schema({
  createdAt: Date,
  email: String,
  name: String,
  password: String
});
// UserSchema.methods.fullName = function(): string {
//   return this.firstName.trim() + " " + this.lastName.trim();
// };

export const User: Model<IUserModel> = model<IUserModel>("User", UserSchema);
