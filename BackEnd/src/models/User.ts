import { Document, model, Schema } from "mongoose";

export interface IUser extends Document {
  userName: string;
  password: string;
}

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = model<IUser>("User", UserSchema);
