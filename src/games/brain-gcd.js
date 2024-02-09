/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  checkAns, makeQuestion, getAns,
} from '../index.js';

const getGcd = (firstNumber, secondNumber) => {
  for (let i = Math.min(firstNumber, secondNumber); i > 0; i -= 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) return i;
  }
  return 0;
};

const findGcd = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  let numberOfAnswers = rightAnswers;
  const firstNumber = Math.floor(Math.random() * 100);
  const secondNumber = Math.floor(Math.random() * 100);
  makeQuestion([firstNumber, secondNumber]);
  const gcdAns = getGcd(firstNumber, secondNumber);
  const userAnswer = getAns();
  if (checkAns(parseInt(userAnswer, 10), gcdAns) === true) {
    numberOfAnswers += 1;
    return findGcd(numberOfAnswers);
  }
  return false;
};

export default findGcd;
