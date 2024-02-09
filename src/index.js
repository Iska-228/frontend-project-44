/* eslint-disable import/no-cycle */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';
import callCalc from './games/brain-calc.js';
import checkIsEven from './games/brain-even.js';
import findGcd from './games/brain-gcd.js';
import ifPrime from './games/brain-prime.js';
import callProgression from './games/brain-progression.js';
import getName from './cli.js';

const name = getName();

const makeConclusion = (userAnswer) => (userAnswer !== false ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`));

const checkAns = (userAns, rightAns) => {
  if (userAns === rightAns) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'`);
  return false;
};

const makeQuestion = (nums) => {
  console.log(`Question: ${nums.join(' ')}`);
};

const getAns = () => {
  const userAns = readlineSync.question('Your answer: ');
  return userAns;
};

const playGame = (gameNumber) => {
  switch (gameNumber) {
    case 0:
      console.log('What is the result of the expression?');
      makeConclusion(callCalc(0, name));
      break;
    case 1:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      makeConclusion(checkIsEven(0, name));
      break;
    case 2:
      console.log('Find the greatest common divisor of given numbers.');
      makeConclusion(findGcd(0, name));
      break;
    case 3:
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      makeConclusion(ifPrime(0, name));
      break;
    case 4:
      console.log('What number is missing in the progression?');
      makeConclusion(callProgression(0, name));
      break;
    default:
      break;
  }
  return 0;
};

export {
  makeConclusion, makeQuestion, getAns, playGame, checkAns,
};
