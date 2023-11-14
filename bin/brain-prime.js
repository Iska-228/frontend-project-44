#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getName, logic, check } from '../src/cli.js';

const name = getName();

const task = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const number = Math.floor(Math.random() * 121);
  let isPrime = 'yes';
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      isPrime = 'no';
      break;
    }
  }
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  const ab = check(rightAnswers, answer, isPrime);
  if (ab === true) {
    const abobAns = rightAnswers + 1;
    return task(abobAns);
  }
  return false;
};

const prime = (username) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const result = task(0, username);
  logic(result, username);
};

prime(name);
