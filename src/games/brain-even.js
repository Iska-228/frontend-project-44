/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  makeQuestion, getAns, check,
} from '../index.js';

export default function checkIsEven(rightAnswers) {
  let evenAns = rightAnswers;
  const number = Math.floor(Math.random() * 100);
  makeQuestion([number]);
  const answer = getAns();
  const rightAns = number % 2 === 0 ? 'yes' : 'no';
  if (check(rightAns, answer) === true) {
    evenAns += 1;
    if (evenAns === 3) return true;
    return checkIsEven(evenAns);
  }
  return false;
}
