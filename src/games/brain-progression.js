/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import {
  makeQuestion, getAns, checkAns,
} from '../index.js';

const callProgression = (rightAnswers) => {
  const progKolvoEl = Math.floor(Math.random() * 5 + 5);//* (max-min)+min
  const progN = Math.floor(Math.random() * 29 + 1);
  const arr = [Math.floor(Math.random() * 19 + 1)];
  for (let i = 0; i < progKolvoEl; i += 1) {
    arr.push(arr[i] + progN);
  }
  const censoredNumberPos = Math.floor(Math.random() * (progKolvoEl - 1) + 1);
  const rightAnsw = arr[censoredNumberPos];
  arr[censoredNumberPos] = '..';
  makeQuestion(arr);
  const userAnswer = getAns();
  if (checkAns(parseInt(userAnswer, 10), rightAnsw) === true) {
    const subtotalAns = rightAnswers + 1;
    if (subtotalAns === 3) return true;
    return callProgression(subtotalAns);
  }
  return false;
};

export default callProgression;
