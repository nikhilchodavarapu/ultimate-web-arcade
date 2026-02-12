const createFailedMessage = (message) => {
  return { status: "failed", message };
};

const register = async (req) => {
  const { username, password, confirmation } = req.json();
  if (password !== confirmation) {
    return new Response(
      JSON.stringify(createFailedMessage("Passwords didn't match")),
      { headers: { "Content-Type": "application/json" } },
    );
  }
};
