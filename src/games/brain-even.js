/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getName from '../cli.js';
import {
  logic, makeQuestion, getAns, check,
} from '../index.js';

const name = getName();

const task = (rightAnswers) => {
  let evenAns = rightAnswers;
  const number = Math.floor(Math.random() * 100);
  makeQuestion([number]);
  const answer = getAns();
  const rightAns = number % 2 === 0 ? 'yes' : 'no';
  if (check(rightAns, answer) === true) {
    evenAns += 1;
    if (evenAns === 3) return true;
    return task(evenAns);
  }
  return false;
};

export default function checkIsEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const a = task(0, name);
  logic(a, name);
}
