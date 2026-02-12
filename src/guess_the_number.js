import { input } from '@inquirer/prompts';

const handle = (guess, actual) => {
  if (guess < actual) {
    console.log(`your guess is low than the actual`);
  }
  if (guess > actual) {
    console.log(`your guess is high than the actual`);
  }
}

const play = async (number) => {
  let chances = 0;
  while (true) {
    const userGuess = await input({ message: 'guess the number', required: true });
    console.clear();
    if (parseInt(userGuess) === number) {
      console.log(`you guessed it right in ${chances} chances`);
      console.log(`points scored: ${chances}`)
      return;
    }
    handle(parseInt(userGuess), number);
    chances++;
  }
}

const getRandomValue = () => Math.floor(Math.random() * 100);

const main = async () => {
  const number = getRandomValue();
  let playAgain = true; 
  while (playAgain) {
    await play(number);
    playAgain = confirm('do you want to play again');
  }
}

await main();