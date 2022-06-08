import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  surname: string;
  email: string;
  password: string;
  joinDate?: Date;
  income?: Object;
  expenses?: Object;
}

const userShema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    joinDate: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    income: {
      type: Object,
      required: true,
      default: {},
    },
    expenses: { type: Object, required: true, default: {} },
  },
  { minimize: false }
);

export const User = model<IUser>("User", userShema);
