/* eslint-disable no-console */
/* eslint-disable import/extensions */
import {
  check, makeQuestion, getAns,
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
  const answer = getAns();
  const ab = check(answer, isPrime);
  if (ab === true) {
    const abobAns = rightAnswers + 1;
    return ifPrime(abobAns);
  }
  return false;
};

export default ifPrime;
