/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import {
  checkAns, makeQuestion, getAns,
} from '../index.js';

const ifPrime = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const number = Math.floor(Math.random() * 121);
  let isPrime = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = 'no';
      break;
    }
  }
  makeQuestion([number]);
  const userAnswer = getAns();
  if (checkAns(userAnswer, isPrime) === true) {
    const abobAns = rightAnswers + 1;
    return ifPrime(abobAns);
  }
  return false;
};

export default ifPrime;
