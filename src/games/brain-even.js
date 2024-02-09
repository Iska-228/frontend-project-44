/* eslint-disable import/no-cycle */
/* eslint-disable import/named */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  makeQuestion, getAns, checkAns,
} from '../index.js';

export default function checkIsEven(rightAnswers) {
  let evenAns = rightAnswers;
  const number = Math.floor(Math.random() * 100);
  makeQuestion([number]);
  const userAnswer = getAns();
  const rightAns = number % 2 === 0 ? 'yes' : 'no';
  if (checkAns(rightAns, userAnswer) === true) {
    evenAns += 1;
    if (evenAns === 3) return true;
    return checkIsEven(evenAns);
  }
  return false;
}
