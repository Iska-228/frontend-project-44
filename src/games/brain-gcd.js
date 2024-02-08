/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getName from '../cli.js';
import {
  logic, check, makeQuestion, getAns,
} from '../index.js';

const name = getName();

const getGcd = (first, second) => {
  for (let i = Math.min(first, second); i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) return i;
  }
  return 0;
};

const task = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  let abobAns = rightAnswers;
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);
  makeQuestion([first, second]);
  const gcdAns = getGcd(first, second);
  const userAnswer = getAns();
  const abo = check(rightAnswers, parseInt(userAnswer, 10), gcdAns);
  if (abo === true) {
    abobAns += 1;
    return task(abobAns);
  }
  return false;
};

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const result = task(0, name);
  logic(result, name);
};

export default gcd;
