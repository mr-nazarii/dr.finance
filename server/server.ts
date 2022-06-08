import { User } from "./userModel";
import express, { Application, Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { getUser } from "./models/middleware";

const app: Application = express();
const port = process.env.PORT || 5000;
mongoose.connect(
  "mongodb+srv://admin:admin680@drfinance.ksuhvjx.mongodb.net/test"
);

const db = mongoose.connection;

db.on("error", (err: any) => console.error("An error occurred: " + err));
db.once("open", () =>
  console.log("The connection of MongoDB is succsessfully established")
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await User.find();
    return res.json(users);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
});

app.post(
  "/account/create",
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    const newUserObject = new User({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      const user = await User.findOne({ email: newUserObject.email });

      if (user?.email === newUserObject.email) {
        return res.status(400).json({ message: "Account exists" });
      }
      const newUser = await newUserObject.save();
      return res.status(201).json({ message: "Account created" });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

app.post(
  "/account/login",
  getUser,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (res.locals.user.password !== req.body.password) {
        return res.status(400).json({ message: "Wrong password" });
      }
      return res.status(200).json({ message: "User login successful" });
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }
);

app.listen(port, () => console.log("Server running"));
