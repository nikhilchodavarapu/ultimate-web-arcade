import { initializeDB } from "../src//initialize-db.js";
import { register } from "../src/login.js";

const displayFeedback = (guess, actual) => {
  if (guess < actual) {
    ;
    console.log(`your guess is low than the actual`);
  }
  if (guess > actual) {
    console.log(`your guess is high than the actual`);
  }
};

const calculateStars = (score) => {
  if (score >= 80) {
    return 3;
  }
  if (score >= 60) {
    return 2;
  }
  return 1;
};

const getResults = (chances) => {
  const score = 100 - 5 * chances;
  const stars = calculateStars(score);
  console.log(`you guessed it right in ${chances} chances`);
  console.log({ score, stars });
  return ({ status: `success`, score, stars });
};

const storeScores = (db, username, { score, stars }) => {
  const row = db.prepare(`SELECT * FROM SCORES WHERE username = '${username}'`)
    .get();
  db.prepare(
    `UPDATE SCORES SET 
    score = ${score + row.score},
    stars = ${stars + row.stars}
    WHERE username = '${username}'`,
  ).run();
  return { isSucces: true, msg: "updated successfully" };
};

const getRandomValue = () => Math.floor(Math.random() * 100);

const play = (db, { username }) => {
  const number = getRandomValue();
  console.log(number);
  let chances = 0;

  while (true) {
    const userGuess = +prompt("Guess the number :");
    console.clear();

    if (parseInt(userGuess) === number) {
      storeScores(db, username, result);
      const result = JSON.stringify(getResults(chances));
      return new Response(result, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    displayFeedback(parseInt(userGuess), number);
    chances++;
  }
};

const registerUser = (username, db) =>
  register(db, { username, password: 1234, confirmation: 1234 });

const main = () => {
  const db = initializeDB();
  registerUser(Deno.args[0], db);
  while (true) {
    play(db, { username: Deno.args[0] });
    const res = confirm("do you want to play again : ");
    if (!res) {
      break;
    }
  }
};

await main();
