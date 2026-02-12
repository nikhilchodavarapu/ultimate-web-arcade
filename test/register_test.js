import { afterAll, beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { DatabaseSync } from "node:sqlite";
import { login, register } from "../src/login.js";
import { assertEquals } from "@std/assert";

const db = new DatabaseSync("database/test.db");
beforeAll(() => {
  db.exec(`
    CREATE TABLE REGISTRATION (
      username TEXT PRIMARY KEY, 
      password TEXT
    );
  
    CREATE TABLE SCORES (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      score INTEGER,
      stars INTEGER,
      FOREIGN KEY (username) REFERENCES REGISTRATION(username)
    );
  `);
});

describe("Testing registration", () => {
  it("Should success since registering a new user with new username", async () => {
    const req = {
      username: "nikhil",
      password: "1234",
      confirmation: "1234",
    };
    const response = register(db, req);
    assertEquals((await response.json()).status, "success");
  });

  it("Should fail since username already exists", async () => {
    const req = {
      username: "nikhil",
      password: "4322",
      confirmation: "4322",
    };
    const response = register(db, req);
    assertEquals((await response.json()).status, "failed");
  });

  it("Should fail since both passwords aren't same", async () => {
    const req = {
      username: "haji",
      password: "4321",
      confirmation: "4322",
    };
    const response = register(db, req);
    assertEquals((await response.json()).status, "failed");
  });
});

describe("Testing login", () => {
  it("Should success since logged in with correct credentitals", async () => {
    const req = {
      username: "nikhil",
      password: "1234",
    };
    const response = login(db, req);
    assertEquals((await response.json()).status, "success");
  });

  it("Should fail since username dosen't exists", async () => {
    const req = {
      username: "haji",
      password: "4322",
    };
    const response = register(db, req);
    assertEquals((await response.json()).status, "failed");
  });

  it("Should fail since logged in with wrong password", async () => {
    const req = {
      username: "nikhil",
      password: "4321",
    };
    const response = register(db, req);
    assertEquals((await response.json()).status, "failed");
  });
});

afterAll(async () => await Deno.remove("database/test.db"));
