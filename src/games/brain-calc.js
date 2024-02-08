/* eslint-disable import/extensions */
/* eslint-disable no-console */

import getName from '../cli.js';
import { logic, makeQuestion, getAns } from '../index.js';

const name = getName();

const exp = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);
  const pmm = Math.floor(Math.random() * 100) % 3;
  let operation = '';
  switch (pmm) {
    case 0: operation = '+'; break;
    case 1: operation = '-'; break;
    case 2: operation = '*'; break;
    default: break;
  }
  makeQuestion([first, operation, second]);
  const userAnswer = getAns();
  let rightAnsw = 0;
  switch (operation) {
    case '+': rightAnsw = first + second; break;
    case '-': rightAnsw = first - second; break;
    case '*': rightAnsw = first * second; break;
    default: break;
  }
  let abobAns = rightAnswers;
  if (parseInt(userAnswer, 10) === rightAnsw) {
    console.log('Correct!');
    abobAns += 1;
    return exp(abobAns);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
  return false;
};

const calc = () => {
  console.log('What is the result of the expression?');
  const a = exp(0, name);
  logic(a, name);
};

export default calc;
