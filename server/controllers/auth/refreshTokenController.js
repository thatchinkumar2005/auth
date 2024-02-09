import * as db from "../../models/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function handleRefresh(req, res) {
  const cookie = req.cookies;
  if (!cookie?.jwt) return res.sendStatus(401);

  const refreshToken = cookie.jwt;
  console.log(refreshToken);

  try {
    const resp = await db.query(
      "select username, pswd, refreshtoken from users where refreshtoken = $1",
      [refreshToken]
    );

    const user = resp.rows[0];

    if (!user) {
      return res.sendStatus(403);
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
          { username: user.username },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "30s",
          }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}
