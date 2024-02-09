import pg from "pg";

const pool = new pg.Pool({
  host: "localhost",
  port: 5433,
  user: "postgres",
  password: "123456",
  database: "auth",
});

export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};
