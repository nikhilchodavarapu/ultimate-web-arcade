import { initializeDB } from "../src/initialize-db.js";

const getNextCard = () => {
  const randomNumber = Math.floor(Math.random() * 30);
  return (randomNumber < 10)
    ? randomNumber + ""
    : String.fromCharCode(97 + randomNumber);
};

const displayCards = (cards) => {
  let i = 10;
  return new Promise((resolve) => {
    const id = setInterval(() => {
      console.clear();
      console.log("Cards =>", cards);
      console.log("Time => ", i);
      i--;
      if (i === 0) {
        clearInterval(id);
        resolve(10);
      }
    }, 400);
  });
};

const checkMemory = async (cards) => {
  await displayCards(cards);
  console.clear();
  const response = prompt(">> ");
  return response === cards;
};

const calculateStars = (score) => {
  if (score >= 50) return 3;
  if (score >= 25) return 2;
  if (score >= 10) return 1;
};

const getResults = (score) => {
  const stars = calculateStars(score);
  return { status: "success", score, stars };
};

const updateScores = (db, username, { score, stars }) => {
  db.exec(`UPDATE SCORES 
    SET score = score + ${score},
    stars = stars + ${stars}
    WHERE username = '${username}'`);
};

const play = async (db, { username }) => {
  const cards = [];
  const nextCard = getNextCard();
  cards.push(nextCard);
  let score = 0;
  let inc = 1;
  while (await checkMemory(cards.join(""))) {
    score += inc;
    inc++;
    const nextCard = getNextCard();
    cards.push(nextCard);
  }
  const results = getResults(score);
  updateScores(db, username, results);
  return new Response(JSON.stringify(results), {
    headers: { "Content-Type": "application/json" },
  });
};

play(initializeDB(), { username: "nikhil" });
