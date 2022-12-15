const getNumber = () => Math.floor(100 * Math.random());
const isEven = (number) => number % 2 === 0;

export const game = {
  getQuestion() {
    const number = getNumber();
    return {
      question: number.toString(),
      correctAnswer: isEven(number) ? 'yes' : 'no',
    };
  },
  getWelcomeMessage() {
    return 'Answer "yes" if the number is even, otherwise answer "no".';
  },
};

export default game;
