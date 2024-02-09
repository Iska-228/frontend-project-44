/* eslint-disable no-console */
/* eslint-disable import/extensions */
import {
  makeQuestion, getAns, check,
} from '../index.js';

const callProgression = (rightAnswers) => {
  const progKolvoEl = Math.floor(Math.random() * 5 + 5);//* (max-min)+min
  const progN = Math.floor(Math.random() * 29 + 1);
  const firstEl = Math.floor(Math.random() * 19 + 1);
  const arr = [];
  arr.push(firstEl);
  for (let i = 0; i < progKolvoEl; i += 1) {
    arr.push(arr[i] + progN);
  }
  const censPos = Math.floor(Math.random() * (progKolvoEl - 1) + 1);
  const rightAnsw = arr[censPos];
  arr[censPos] = '..';
  makeQuestion(arr);
  const userAnswer = getAns();
  if (check(parseInt(userAnswer, 10), rightAnsw) === true) {
    const abobAns = rightAnswers + 1;
    if (abobAns === 3) return true;
    return callProgression(abobAns);
  }
  return false;
};

export default callProgression;
