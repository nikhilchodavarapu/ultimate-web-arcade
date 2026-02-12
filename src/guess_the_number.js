// import { input } from "@inquirer/prompts";

const handle = (guess, actual) => {
  if (guess < actual) {
    console.log(`your guess is low than the actual`);
  }
  if (guess > actual) {
    console.log(`your guess is high than the actual`);
  }
};

const play = () => {
  const number = getRandomValue();
  let chances = 0;
  while (true) {
    const userGuess = +prompt("Guess the number :");
    console.clear();
    if (parseInt(userGuess) === number) {
      console.log(`you guessed it right in ${chances} chances`);
      console.log(`points scored: ${100 - 5 * chances}`);
      return;
    }
    handle(parseInt(userGuess), number);
    chances++;
  }
};

const getRandomValue = () => Math.floor(Math.random() * 100);

const main = () => {
  while (true) {
    play();
    const res = confirm("do you want to play again : ");
    if (!res) {
      break;
    }
  }
};

await main();
