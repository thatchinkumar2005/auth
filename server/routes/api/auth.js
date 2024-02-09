import express from "express";
import { handleLogin } from "../../controllers/auth/authController.js";

const loginUserApiRoute = express.Router();

loginUserApiRoute.post("/", handleLogin);

export { loginUserApiRoute };
