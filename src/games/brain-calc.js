/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import {
  makeQuestion, getAns, checkAns,
} from '../index.js';

const callCalc = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  const ExpressionNumber = Math.floor(Math.random() * 100) % 3;
  let mathExp = '';
  switch (ExpressionNumber) {
    case 0: mathExp = '+'; break;
    case 1: mathExp = '-'; break;
    case 2: mathExp = '*'; break;
    default: break;
  }
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
