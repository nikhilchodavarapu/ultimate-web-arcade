import { DatabaseSync } from "node:sqlite";

export const initializeDB = () => {
  const db = new DatabaseSync("./database/user-details.db");
  db.exec(`CREATE TABLE IF NOT EXISTS REGISTRATION (
    username TEXT PRIMARY KEY,
    password TEXT
    )`);
  return db;
};
