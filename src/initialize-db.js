import { DatabaseSync } from "node:sqlite";

export const initializeDB = () => {
  const db = new DatabaseSync("./database/user-details.db");
  db.exec(`
    CREATE TABLE IF NOT EXISTS REGISTRATION (
      username TEXT PRIMARY KEY,
      password TEXT
    );

    CREATE TABLE IF NOT EXISTS SCORES (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      score INTEGER,
      stars INTEGER,
      FOREIGN KEY (username) REFERENCES REGISTRATION(username)
    );
    `);
  return db;
};


initializeDB();