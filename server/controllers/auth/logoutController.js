import * as db from "../../models/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function handleLogout(req, res) {
  //clear the access token in the frontend,

  const cookie = req.cookies;
  if (!cookie?.jwt) return res.sendStatus(200);
  const refreshToken = cookie?.jwt;

  const resp = await db.query(
    "select username, refreshtoken from users where refreshtoken = $1",
    [refreshToken]
  );

  const user = resp.rows[0];

  if (!user) {
    res.clearCookie("jwt", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 60 * 24 * 60 * 1000,
    });
    return res.sendStatus(204);
  }

  //clear the refresh token in db
  await db.query("update users set refreshtoken = ''");
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    maxAge: 60 * 24 * 60 * 1000,
  });
  return res.sendStatus(200);
}
