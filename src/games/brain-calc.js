/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import {
  makeQuestion, getAns, checkAns,
} from '../index.js';

const getExpression = () => {
  const ExpressionNumber = Math.floor(Math.random() * 100) % 3;
  switch (ExpressionNumber) {
    case 0: return '+';
    case 1: return '-';
    case 2: return '*';
    default: return 0;
  }
};

const callCalc = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const mathExp = getExpression();
  makeQuestion([firstNumber, mathExp, secondNumber]);
  const userAnswer = getAns();
  let rightAnsw = 0;
  switch (mathExp) {
    case '+': rightAnsw = firstNumber + secondNumber; break;
    case '-': rightAnsw = firstNumber - secondNumber; break;
    case '*': rightAnsw = firstNumber * secondNumber; break;
    default: break;
  }
  let subtotalAns = rightAnswers;
  if (checkAns(parseInt(userAnswer, 10), rightAnsw) === true) {
    subtotalAns += 1;
    return callCalc(subtotalAns);
  }
  return false;
};

export default callCalc;
