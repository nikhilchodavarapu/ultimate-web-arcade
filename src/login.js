// import { initializeDB } from "./initialize-db.js";

const createSuccessMessage = (message) => ({ status: "success", message });
const createFailedMessage = (message) => ({ status: "failed", message });

export const register = (db, { username, password, confirmation }) => {
  if (password !== confirmation) {
    return new Response(
      JSON.stringify(createFailedMessage("Passwords didn't match")),
      { headers: { "Content-Type": "application/json" } },
    );
  }
  try {
    db.exec(
      `INSERT INTO REGISTRATION (username, password) VALUES ('${username}', '${password}')`,
    );
    return new Response(
      JSON.stringify(createSuccessMessage("REGISTRATION SUCCESSFUL...")),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch {
    return new Response(
      JSON.stringify(createFailedMessage("Username already exists")),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};

// const db = initializeDB();
// Deno.serve({ port: 8080 }, (req) => register(db, req));
