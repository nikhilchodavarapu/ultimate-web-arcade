import { initializeDB } from "./src/initialize-db.js";
import { login, register } from "./src/login.js";

const handleRequest = async (req) => {
  const pathname = new URL(req.url).pathname;
  const request = await req.json();
  const db = initializeDB();
  return pathname === "/register" ? register(db, request) : login(db, request);
};

const main = () => {
  Deno.serve({ port: 8080 }, handleRequest);
};

main();
