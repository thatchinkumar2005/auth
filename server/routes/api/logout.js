import express from "express";
import { handleLogout } from "../../controllers/auth/logoutController.js";

const logoutApiRoute = express.Router();

logoutApiRoute.get("/", handleLogout);

export { logoutApiRoute };
