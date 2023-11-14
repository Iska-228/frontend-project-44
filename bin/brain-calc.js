#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import { getName, logic } from '../src/cli.js';

const name = getName();

const exp = (rightAnswers) => {
  if (rightAnswers === 3) return true;
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);
  const pmm = Math.floor(Math.random() * 100) % 3;
  let operation = '';
  switch (pmm) {
    case 0: operation = '+'; break;
    case 1: operation = '-'; break;
    case 2: operation = '*'; break;
    default: break;
  }
  console.log(`Question: ${first} ${operation} ${second}`);
  const userAnswer = readlineSync.question('Your answer: ');
  let rightAnsw = 0;
  switch (operation) {
    case '+': rightAnsw = first + second; break;
    case '-': rightAnsw = first - second; break;
    case '*': rightAnsw = first * second; break;
    default: break;
  }
  let abobAns = rightAnswers;
  if (parseInt(userAnswer, 10) === rightAnsw) {
    console.log('Correct!');
    abobAns += 1;
    return exp(abobAns, name);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
  return false;
};

const calc = (username) => {
  console.log('What is the result of the expression?');
  const a = exp(0, username);
  logic(a, username);
};

calc(name);
