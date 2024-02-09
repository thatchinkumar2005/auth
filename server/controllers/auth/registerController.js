import bcrypt from "bcrypt";
import * as db from "../../models/db.js";

export async function handleNewUser(req, res) {
  const { username, pswd } = req.body;

  if (!username || !pswd) {
    return res
      .status(400)
      .json({ message: "You have to provide username and password!" });
  }

  const resp = await db.query(
    "select username from users where username = $1",
    [username]
  );

  if (resp.rows.length !== 0) {
    return res.status(407).json({ message: "usename already taken!" });
  }

  try {
    const hashedPswd = await bcrypt.hash(pswd, 10);
    await db.query("insert into users(username, pswd) values($1, $2)", [
      username,
      hashedPswd,
    ]);

    const resp = await db.query(
      "select username from users where username = $1",
      [username]
    );

    //return a jwt

    res.status(200).json({
      message: `user with username ${resp.rows[0].username} has been created`,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
