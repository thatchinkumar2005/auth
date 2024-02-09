import express from "express";
import { handleRefresh } from "../../controllers/auth/refreshTokenController.js";

const refreshApiRoute = express.Router();

refreshApiRoute.get("/", handleRefresh);

export { refreshApiRoute };
