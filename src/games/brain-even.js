/* eslint-disable import/extensions */
/* eslint-disable no-console */
import getName from '../cli.js';
import { logic, makeQuestion, getAns } from '../index.js';

const name = getName();

const task = (rightAnswers) => {
  let abobAns = rightAnswers;
  const number = Math.floor(Math.random() * 100);
  makeQuestion([number]);
  const answer = getAns();
  const rightAns = number % 2 === 0 ? 'yes' : 'no';
  if (rightAns === answer) {
    console.log('Correct!');
    abobAns += 1;
    if (abobAns === 3) return true;
    return task(abobAns);
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAns}'`);
  return false;
};

export default function isEven() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const a = task(0, name);
  logic(a, name);
}
