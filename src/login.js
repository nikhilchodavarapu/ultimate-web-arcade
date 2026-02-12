// import { initializeDB } from "./initialize-db.js";

const createSuccessMessage = (message) => ({ status: "success", message });
const createFailedMessage = (message) => ({ status: "failed", message });

export const register = (db, { username, password, confirmation }) => {
  if (password !== confirmation) {
    return new Response(
      JSON.stringify(createFailedMessage("Passwords didn't match")),
      { headers: { "Content-Type": "application/json" }, status: 404 },
    );
  }
  try {
    db.exec(
      `INSERT INTO REGISTRATION (username, password) VALUES ('${username}', '${password}');
      
      INSERT INTO SCORES (username, score, stars) VALUES ('${username}', 0, 0);`,
    );
    return new Response(
      JSON.stringify(createSuccessMessage("REGISTRATION SUCCESSFUL...")),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      },
    );
  } catch {
    return new Response(
      JSON.stringify(createFailedMessage("Username already exists")),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      },
    );
  }
};

export const login = (db, { username, password }) => {
  const row = db.prepare(
    `SELECT * FROM REGISTRATION WHERE username = '${username}'`,
  ).get();
  if (!row) {
    return new Response(
      JSON.stringify(createFailedMessage("username doesn't exists")),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      },
    );
  }
  if (row.password !== password) {
    return new Response(
      JSON.stringify(
        createFailedMessage("The password you enterd is incorrect"),
      ),
      {
        headers: { "Content-Type": "application/json" },
        status: 404,
      },
    );
  }
  return new Response(
    JSON.stringify(createSuccessMessage("LOGIN SUCCESSFUL...")),
    { headers: { "Content-Type": "application/json" }, status: 200 },
  );
};

// const db = initializeDB();
// Deno.serve({ port: 8080 }, (req) => register(db, req));
