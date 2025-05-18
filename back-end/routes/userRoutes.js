import express from "express";
import { userReg } from "../controller/user-Controller.js";

export const userRouter = express.Router();

userRouter.post("/register-user", userReg);
