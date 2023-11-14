#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getName, logic } from '../src/cli.js';

const name = getName();

const task = (rightAnswers) => {
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
  console.log(`Question: ${arr.join(' ')}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (parseInt(userAnswer, 10) === rightAnsw) {
    console.log('Correct!');
    const abobAns = rightAnswers + 1;
    if (abobAns === 3) return true;
    return task(abobAns);
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
  return false;
};

const progression = (username) => {
  console.log('What number is missing in the progression?');
  const result = task(0, username);
  logic(result, username);
};

progression(name);
