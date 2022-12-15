import { question } from 'readline-sync';

const ROUNDS = 3;

const getRoundResult = (answer, gameQuestion) => {
  const result = (answer === gameQuestion.correctAnswer);
  const message = result
    ? 'Correct!'
    : `'${answer}' is wrong answer ;(. Correct answer was '${gameQuestion.correctAnswer}'.`;

  return { result, message };
};

const playRound = (game) => {
  const gameQuestion = game.getQuestion();
  console.log(`Question: ${gameQuestion.question}`);

  const answer = question('Your answer: ');
  const roundResult = getRoundResult(answer, gameQuestion);
  console.log(roundResult.message);

  return roundResult.result;
};

const playGameRounds = (game) => {
  for (let round = 1; round <= ROUNDS; round += 1) {
    const roundResult = playRound(game);
    if (!roundResult) return false;
  }
  return true;
};

const getGameResultMessage = (gameResult, username) => (gameResult ? `Congratulations, ${username}!` : `Let's try again, ${username}!`);

export const playGame = (username, game) => {
  console.log(game.getWelcomeMessage());
  const gameResult = playGameRounds(game);
  const message = getGameResultMessage(gameResult, username);
  console.log(message);
};

export default playGame;
