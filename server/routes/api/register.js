import express from "express";
import { handleNewUser } from "../../controllers/auth/registerController.js";

const registerUserApiRoute = express.Router();

registerUserApiRoute.post("/", handleNewUser);

export { registerUserApiRoute };
