import { DatabaseSync } from "node:sqlite";

export const initializeDB = () => {
  const db = new DatabaseSync("./database/user-details.db");
  db.exec(`CREATE TABLE IF NOT EXISTS REGISTRATION (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
    )`);
  return db;
};
