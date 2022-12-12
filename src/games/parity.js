import { question } from "readline-sync";

const START_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';
const ROUNDS = 3;

const playGameRounds = () => {
    let round = 1;
    while (round <= ROUNDS) {
        const q = getQuestion();
        console.log(q.toString());
        const answer = question(`Your answer: `);

        const correct = answer === q.answer;

        if (!correct) {
            console.log(getFailMessage(q, answer));
            return false;
        }
        console.log('Correct!')
        round += 1;
    }
    return true;
}

const getFailMessage = (q, answer) => {
    return `'${answer}' is wrong answer ;(. Correct answer was '${q.answer}'.`;
}

const getResultMessage = (result, username) => {
    return result ? `Congratulations, ${username}!` : `Let's try again, ${username}!`;
}

const getNumber = () => Math.floor(100 * Math.random());
const isEven = (number) => number % 2 === 0;

const getQuestion = () => {
    const number = getNumber();
    return {
        value: number,
        answer: isEven(number) ? 'yes' : 'no',
        toString() {
            return `Question: ${number}`
        }
    }
}

export default (username) => {
    console.log(START_MESSAGE);
    const result = playGameRounds();
    console.log(getResultMessage(result, username));
}