import { afterAll, beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { DatabaseSync } from "node:sqlite";
import { register } from "../src/login.js";
import { assertEquals } from "@std/assert";

describe("Testing registration", () => {
  const db = new DatabaseSync("database/test.db");
  beforeAll(() => {
    db.exec(`CREATE TABLE REGISTRATION (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE, 
    password TEXT
    )`);
  });

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

  afterAll(async () => await Deno.remove("database/test.db"));
});
