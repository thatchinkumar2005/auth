import * as db from "../models/db.js";

export async function getAllEmployees(req, res) {
  try {
    const resp = await db.query("select * from employees");

    res.send(resp.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createNewEmployee(req, res) {
  const { fname, lname } = req.body;

  if (!fname || !lname) {
    return res
      .status(400)
      .json({ message: "First name and last name are required" });
  }

  try {
    await db.query("insert into employees(fname, lname) values($1, $2)", [
      fname,
      lname,
    ]);

    const resp = await db.query("select * from employees");

    res.json(resp.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateEmployee(req, res) {
  if (!req.body.id) {
    return res
      .status(400)
      .json({ message: "id, fname and lname are required" });
  }

  try {
    await db.query(
      "update employees set fname = $1, lname = $2 where id = $3",
      [req.body?.fname, req.body?.lname, req.body.id]
    );

    const resp = await db.query("select * from employees where id = $1", [
      req.body.id,
    ]);

    res.json(resp.rows[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function deleteEmployee(req, res) {
  const { id } = req.body;

  if (!id) {
    res.status(400).json({ message: "id should be provided" });
  }

  try {
    await db.query("delete from employees where id = $1", [id]);

    const resp = await db.query("select * from employees");

    res.json(resp.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
