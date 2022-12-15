const OPERATORS = ['+', '-', '*'];

const getOperator = () => {
  const index = Math.floor(OPERATORS.length * Math.random());
  return OPERATORS[index];
};

const getRandomNumber = () => Math.floor(100 * Math.random());
const getOperands = () => [getRandomNumber(), getRandomNumber()];
const getExpressionResult = (operator, operands) => {
  switch (operator) {
    case '+': return operands[0] + operands[1];
    case '-': return operands[0] - operands[1];
    case '*': return operands[0] * operands[1];
    default: throw new Error('operator not supported');
  }
};

export const game = {
  getQuestion() {
    const operator = getOperator();
    const operands = getOperands();
    return {
      question: `${operands[0]} ${operator} ${operands[1]}`,
      correctAnswer: getExpressionResult(operator, operands).toString(),
    };
  },
  getWelcomeMessage() {
    return 'What is the result of the expression?';
  },
};

export default game;
