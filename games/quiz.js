import { initializeDB } from "../src/initialize-db.js";
import { register } from "../src/login.js";

// const gkQuestions = [
//   {
//     question: "What is the capital of Australia?",
//     options: ["Sydney", "Canberra", "Melbourne", "Perth"],
//     answer: "Canberra",
//   },
//   {
//     question: "Which planet is known as the Red Planet?",
//     options: ["Earth", "Mars", "Jupiter", "Saturn"],
//     answer: "Mars",
//   },
//   {
//     question: "Which ocean is the largest?",
//     options: ["Atlantic", "Indian", "Pacific", "Arctic"],
//     answer: "Pacific",
//   },
//   {
//     question: "Who wrote 'Romeo and Juliet'?",
//     options: ["Shakespeare", "Dickens", "Homer", "Tolstoy"],
//     answer: "Shakespeare",
//   },
//   {
//     question: "How many continents are there?",
//     options: ["5", "6", "7", "8"],
//     answer: "7",
//   },
//   {
//     question: "Which country invented pizza?",
//     options: ["France", "USA", "Italy", "Spain"],
//     answer: "Italy",
//   },
//   {
//     question: "What currency is used in Japan?",
//     options: ["Yuan", "Won", "Yen", "Ringgit"],
//     answer: "Yen",
//   },
//   {
//     question: "What is the tallest mountain?",
//     options: ["K2", "Everest", "Kilimanjaro", "Makalu"],
//     answer: "Everest",
//   },
//   {
//     question: "Which animal is known as King of the Jungle?",
//     options: ["Tiger", "Elephant", "Lion", "Leopard"],
//     answer: "Lion",
//   },
//   {
//     question: "Which gas do plants absorb?",
//     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
//     answer: "Carbon Dioxide",
//   },
// ];

// const scienceQuestions = [
//   {
//     question: "What is H2O?",
//     options: ["Oxygen", "Hydrogen", "Water", "Salt"],
//     answer: "Water",
//   },
//   {
//     question: "What planet is closest to the Sun?",
//     options: ["Venus", "Mercury", "Mars", "Earth"],
//     answer: "Mercury",
//   },
//   {
//     question: "What part of the cell contains DNA?",
//     options: ["Nucleus", "Cytoplasm", "Membrane", "Ribosome"],
//     answer: "Nucleus",
//   },
//   {
//     question: "Speed of light is approximately?",
//     options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"],
//     answer: "300,000 km/s",
//   },
//   {
//     question: "Which vitamin is from sunlight?",
//     options: ["A", "B12", "C", "D"],
//     answer: "D",
//   },
//   {
//     question: "Which organ pumps blood?",
//     options: ["Brain", "Liver", "Heart", "Lungs"],
//     answer: "Heart",
//   },
//   {
//     question: "What gas do humans breathe in?",
//     options: ["Oxygen", "Carbon", "Helium", "Hydrogen"],
//     answer: "Oxygen",
//   },
//   {
//     question: "What force pulls objects down?",
//     options: ["Magnetism", "Gravity", "Friction", "Electricity"],
//     answer: "Gravity",
//   },
//   {
//     question: "Chemical symbol for Gold?",
//     options: ["Au", "Ag", "Gd", "Go"],
//     answer: "Au",
//   },
//   {
//     question: "Which blood cells fight infection?",
//     options: ["Red", "White", "Platelets", "Plasma"],
//     answer: "White",
//   },
// ];

// const historyQuestions = [
//   {
//     question: "Who was the first President of USA?",
//     options: ["Lincoln", "Washington", "Jefferson", "Adams"],
//     answer: "Washington",
//   },
//   {
//     question: "World War II ended in?",
//     options: ["1942", "1945", "1939", "1950"],
//     answer: "1945",
//   },
//   {
//     question: "Who discovered America?",
//     options: ["Columbus", "Magellan", "Cook", "Vasco da Gama"],
//     answer: "Columbus",
//   },
//   {
//     question: "Great Wall is in?",
//     options: ["India", "China", "Japan", "Korea"],
//     answer: "China",
//   },
//   {
//     question: "Who built the pyramids?",
//     options: ["Romans", "Greeks", "Egyptians", "Mayans"],
//     answer: "Egyptians",
//   },
//   {
//     question: "Who was known as Iron Man of India?",
//     options: ["Nehru", "Patel", "Gandhi", "Bose"],
//     answer: "Patel",
//   },
//   {
//     question: "The Titanic sank in?",
//     options: ["1912", "1905", "1920", "1898"],
//     answer: "1912",
//   },
//   {
//     question: "First man on the moon?",
//     options: [
//       "Buzz Aldrin",
//       "Yuri Gagarin",
//       "Neil Armstrong",
//       "Michael Collins",
//     ],
//     answer: "Neil Armstrong",
//   },
//   {
//     question: "The Renaissance began in?",
//     options: ["France", "Italy", "England", "Germany"],
//     answer: "Italy",
//   },
//   {
//     question: "Who was Cleopatra?",
//     options: [
//       "Roman Empress",
//       "Greek Queen",
//       "Egyptian Queen",
//       "Persian Queen",
//     ],
//     answer: "Egyptian Queen",
//   },
// ];

// const techQuestions = [
//   {
//     question: "HTML stands for?",
//     options: [
//       "HyperText Markup Language",
//       "HighText Machine Language",
//       "Hyper Transfer Markup Language",
//       "None",
//     ],
//     answer: "HyperText Markup Language",
//   },
//   {
//     question: "Which language runs in browser?",
//     options: ["Python", "C++", "JavaScript", "Java"],
//     answer: "JavaScript",
//   },
//   {
//     question: "What does CPU stand for?",
//     options: [
//       "Central Processing Unit",
//       "Computer Personal Unit",
//       "Central Print Unit",
//       "Core Processing Unit",
//     ],
//     answer: "Central Processing Unit",
//   },
//   {
//     question: "Binary uses how many digits?",
//     options: ["2", "8", "10", "16"],
//     answer: "2",
//   },
//   {
//     question: "Founder of Microsoft?",
//     options: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
//     answer: "Bill Gates",
//   },
//   {
//     question: "CSS is used for?",
//     options: ["Logic", "Styling", "Database", "Backend"],
//     answer: "Styling",
//   },
//   {
//     question: "JavaScript is mainly used for?",
//     options: [
//       "Game engine",
//       "Web interactivity",
//       "Operating system",
//       "Hardware",
//     ],
//     answer: "Web interactivity",
//   },
//   {
//     question: "Git is a?",
//     options: ["Language", "Database", "Version Control System", "Framework"],
//     answer: "Version Control System",
//   },
//   {
//     question: "Which company created iPhone?",
//     options: ["Samsung", "Apple", "Google", "Microsoft"],
//     answer: "Apple",
//   },
//   {
//     question: "JSON stands for?",
//     options: [
//       "JavaScript Object Notation",
//       "Java Standard Object Network",
//       "JavaScript Online Network",
//       "None",
//     ],
//     answer: "JavaScript Object Notation",
//   },
// ];

// gkQuestions.push(
//   {
//     question: "Which country has the largest population?",
//     options: ["India", "USA", "China", "Russia"],
//     answer: "India",
//   },
//   {
//     question: "Which desert is the largest in the world?",
//     options: ["Sahara", "Gobi", "Arabian", "Kalahari"],
//     answer: "Sahara",
//   },
//   {
//     question: "Which language has the most native speakers?",
//     options: ["English", "Spanish", "Mandarin", "Hindi"],
//     answer: "Mandarin",
//   },
//   {
//     question: "Which is the smallest country in the world?",
//     options: ["Monaco", "Vatican City", "Malta", "San Marino"],
//     answer: "Vatican City",
//   },
//   {
//     question: "Which metal is liquid at room temperature?",
//     options: ["Iron", "Mercury", "Gold", "Silver"],
//     answer: "Mercury",
//   },
//   {
//     question: "How many days are there in a leap year?",
//     options: ["365", "366", "364", "367"],
//     answer: "366",
//   },
//   {
//     question: "Which bird is known for mimicking sounds?",
//     options: ["Eagle", "Parrot", "Crow", "Sparrow"],
//     answer: "Parrot",
//   },
//   {
//     question: "Which country is home to the Amazon rainforest?",
//     options: ["Brazil", "Argentina", "Peru", "Colombia"],
//     answer: "Brazil",
//   },
//   {
//     question: "Which sport uses a shuttlecock?",
//     options: ["Tennis", "Badminton", "Squash", "Cricket"],
//     answer: "Badminton",
//   },
//   {
//     question: "What is the freezing point of water in Celsius?",
//     options: ["0", "32", "100", "-10"],
//     answer: "0",
//   },
// );

// scienceQuestions.push(
//   {
//     question: "Which planet has rings?",
//     options: ["Mars", "Saturn", "Venus", "Mercury"],
//     answer: "Saturn",
//   },
//   {
//     question: "What is the hardest natural substance?",
//     options: ["Gold", "Iron", "Diamond", "Quartz"],
//     answer: "Diamond",
//   },
//   {
//     question: "What part of the plant conducts photosynthesis?",
//     options: ["Root", "Stem", "Leaf", "Flower"],
//     answer: "Leaf",
//   },
//   {
//     question: "What gas is released during photosynthesis?",
//     options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//     answer: "Oxygen",
//   },
//   {
//     question: "Which organ helps in breathing?",
//     options: ["Heart", "Lungs", "Kidney", "Brain"],
//     answer: "Lungs",
//   },
//   {
//     question: "Unit of electric current?",
//     options: ["Volt", "Ampere", "Watt", "Ohm"],
//     answer: "Ampere",
//   },
//   {
//     question: "Which planet is known as Earth's twin?",
//     options: ["Mars", "Venus", "Jupiter", "Neptune"],
//     answer: "Venus",
//   },
//   {
//     question: "What type of energy is stored in food?",
//     options: ["Mechanical", "Chemical", "Solar", "Wind"],
//     answer: "Chemical",
//   },
//   {
//     question: "Which blood group is universal donor?",
//     options: ["A", "B", "AB", "O"],
//     answer: "O",
//   },
//   {
//     question: "What is the boiling point of water in Celsius?",
//     options: ["50", "100", "90", "120"],
//     answer: "100",
//   },
// );

// historyQuestions.push(
//   {
//     question: "Who was the first Emperor of Rome?",
//     options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
//     answer: "Augustus",
//   },
//   {
//     question: "Who led the Indian independence movement?",
//     options: ["Bhagat Singh", "Gandhi", "Nehru", "Subhas Bose"],
//     answer: "Gandhi",
//   },
//   {
//     question: "The Berlin Wall fell in?",
//     options: ["1985", "1989", "1991", "1975"],
//     answer: "1989",
//   },
//   {
//     question: "Who was known as the Maid of Orléans?",
//     options: ["Cleopatra", "Joan of Arc", "Queen Elizabeth", "Marie Curie"],
//     answer: "Joan of Arc",
//   },
//   {
//     question: "Which empire built Machu Picchu?",
//     options: ["Mayan", "Aztec", "Inca", "Roman"],
//     answer: "Inca",
//   },
//   {
//     question: "Who was the British Prime Minister during WWII?",
//     options: ["Churchill", "Thatcher", "Blair", "Cameron"],
//     answer: "Churchill",
//   },
//   {
//     question: "The American Civil War started in?",
//     options: ["1861", "1776", "1812", "1900"],
//     answer: "1861",
//   },
//   {
//     question: "Who painted the Mona Lisa?",
//     options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
//     answer: "Da Vinci",
//   },
//   {
//     question: "Which revolution began in 1789?",
//     options: ["Russian", "French", "American", "Industrial"],
//     answer: "French",
//   },
//   {
//     question: "Who was the first female Prime Minister of UK?",
//     options: [
//       "Theresa May",
//       "Margaret Thatcher",
//       "Elizabeth II",
//       "Angela Merkel",
//     ],
//     answer: "Margaret Thatcher",
//   },
// );

// techQuestions.push(
//   {
//     question: "Which company owns Android?",
//     options: ["Apple", "Google", "Microsoft", "Samsung"],
//     answer: "Google",
//   },
//   {
//     question: "What does RAM stand for?",
//     options: [
//       "Random Access Memory",
//       "Read Access Memory",
//       "Run Active Memory",
//       "Rapid Access Machine",
//     ],
//     answer: "Random Access Memory",
//   },
//   {
//     question: "Which symbol is used for comments in JavaScript?",
//     options: ["//", "##", "<!-- -->", "**"],
//     answer: "//",
//   },
//   {
//     question: "Which company created Windows OS?",
//     options: ["Apple", "Microsoft", "IBM", "Intel"],
//     answer: "Microsoft",
//   },
//   {
//     question: "What does URL stand for?",
//     options: [
//       "Uniform Resource Locator",
//       "Universal Resource Link",
//       "Unified Routing Line",
//       "User Resource Locator",
//     ],
//     answer: "Uniform Resource Locator",
//   },
//   {
//     question: "Which language is used for styling web pages?",
//     options: ["HTML", "CSS", "Python", "C++"],
//     answer: "CSS",
//   },
//   {
//     question: "Which device connects networks?",
//     options: ["Router", "Mouse", "Keyboard", "Monitor"],
//     answer: "Router",
//   },
//   {
//     question: "Which company developed ChatGPT?",
//     options: ["Google", "Meta", "OpenAI", "Microsoft"],
//     answer: "OpenAI",
//   },
//   {
//     question: "Which number system does computer use?",
//     options: ["Decimal", "Binary", "Hexadecimal", "Octal"],
//     answer: "Binary",
//   },
//   {
//     question: "Which tag is used to include JavaScript in HTML?",
//     options: ["<js>", "<javascript>", "<script>", "<code>"],
//     answer: "<script>",
//   },
// );

const generateQuestions = async (topicId, difficulty) => {
  const response = await fetch(
    `https://opentdb.com/api.php?amount=10&type=multiple&category=${topicId}&difficulty=${difficulty}`,
  );
  const data = await response.json();
  return data.results;
};

const getTopicId = () => {
  console.log(`TOPICS :`);
  console.log(`1. General Knowledge`);
  console.log(`2. History`);
  console.log(`3. Technical Related Stuff`);
  console.log(`4. Science`);
  console.log(`5. Movies`);
  const choice = +prompt(`Select a topic :`);
  const topicIds = {
    1: 9,
    2: 23,
    3: 18,
    4: 17,
    5: 11,
  };
  return topicIds[choice];
};

const getDifficulty = () => {
  console.log(`1. Easy`);
  console.log(`2 . Medium`);
  console.log(`3. Hard`);
  const choice = +prompt(`Select a difficulty :`);
  const difficulty = {
    1: "easy",
    2: "medium",
    3: "hard",
  };
  return difficulty[choice];
};

const format = (questions) => {
  return questions.map(
    ({ question, correct_answer, incorrect_answers }) => {
      const options = incorrect_answers.concat(correct_answer);
      return ({ question, correct_answer, options });
    },
  );
};

const init = async () => {
  const topicId = getTopicId();
  const difficulty = getDifficulty();
  const questions = await generateQuestions(topicId, difficulty);
  return format(questions);
};

const askQuestion = (question) => {
  console.log(question.question);
  question.options.forEach((element, i) =>
    console.log(`  ${i + 1}. ${element}`)
  );
  const answer = +prompt(`Enter the option :`);
  return question.options[answer - 1] === question.correct_answer ? 1 : 0;
};

const calcuateStars = (score) => {
  if (score >= 8) return 3;
  if (score >= 6) return 2;
  if (score >= 1) return 1;
  return 0;
};

const storeScores = (db, username, { score, stars }) => {
  db.prepare(
    `UPDATE SCORES SET 
    score = score + ${score},
    stars = stars + ${stars}
    WHERE username = '${username}'`,
  ).run();
  return { isSucces: true, msg: "updated successfully" };
};

const play = async (db, { username }) => {
  let score = 0;
  const questions = await init();
  for (const question of questions) {
    console.clear();
    score += askQuestion(question);
  }
  const stars = calcuateStars(score);
  storeScores(db, username, { score, stars });
  const result = JSON.stringify({ status: "success", score, stars });
  return new Response(result, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const main = async () => {
  const db = initializeDB();
  register(db, { username: Deno.args[0], password: 1234, confirmation: 1234 });
  const { score, stars } = await play(db, { username: Deno.args[0] });
  console.log("---->", score, stars);
};

main();