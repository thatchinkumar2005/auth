import * as db from "../../models/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { dot } from "node:test/reporters";
dotenv.config();

export async function handleLogin(req, res) {
  const { username, pswd } = req.body;
  if (!username || !pswd) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  }

  try {
    const resp = await db.query(
      "select username, pswd from users where username = $1",
      [username]
    );

    const user = resp.rows[0];

    if (!user) {
      return res.status(401).json({ message: "unauthorised" });
    }

    const match = await bcrypt.compare(pswd, user.pswd);

    if (match) {
      const accessToken = jwt.sign(
        { username: user.username },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "30s" }
      );
      const refreshToken = jwt.sign(
        { username: user.username },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "1d" }
      );

      await db.query("update users set refreshtoken = $1 where username = $2", [
        refreshToken,
        user.username,
      ]);

      res.cookie("jwt", refreshToken, {
        httpOnly: true,
        sameSite: "None",
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
    } else {
      res.status(401).json({ message: `wrong password for ${user.username}` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
