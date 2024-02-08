/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const logic = (userAnswer, name) => (userAnswer !== false ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`));

const check = (userAns, rightAns) => {
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

export {
  logic, check, makeQuestion, getAns,
};
