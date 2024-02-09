import express from "express";
import cors from "cors";
import { credentials } from "./middleware/credentials.js";
import { corsOptions } from "./config/corsOpt.js";

import { employeeApiRoute } from "./routes/api/employees.js";
import { registerUserApiRoute } from "./routes/api/register.js";
import { loginUserApiRoute } from "./routes/api/auth.js";
import cookieParser from "cookie-parser";
import { refreshApiRoute } from "./routes/api/refresh.js";
import { logoutApiRoute } from "./routes/api/logout.js";
import { verifyJwt } from "./middleware/verifyjwt.js";

//app
const app = express();
const port = 3000;

//middleware
app.use(credentials);
app.use(cors(corsOptions)); //on both of em for cross site
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/auth/register/", registerUserApiRoute);
app.use("/api/v1/auth/login/", loginUserApiRoute);
app.use("/api/v1/auth/refresh/", refreshApiRoute);
app.use("/api/v1/auth/logout/", logoutApiRoute);

app.use("/api/v1/employees/", verifyJwt, employeeApiRoute);

app.listen(port, () => console.log(`hello ${port}`));
