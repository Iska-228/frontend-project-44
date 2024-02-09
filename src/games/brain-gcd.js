/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  check, makeQuestion, getAns,
} from '../index.js';

const getGcd = (first, second) => {
  for (let i = Math.min(first, second); i > 0; i -= 1) {
    if (first % i === 0 && second % i === 0) return i;
  }
  return 0;
};

const findGcd = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  let abobAns = rightAnswers;
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);
  makeQuestion([first, second]);
  const gcdAns = getGcd(first, second);
  const userAnswer = getAns();
  const abo = check(parseInt(userAnswer, 10), gcdAns);
  if (abo === true) {
    abobAns += 1;
    return findGcd(abobAns);
  }
  return false;
};

export default findGcd;
