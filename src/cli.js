/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const logic = (userAnswer, name) => {
  if (userAnswer !== false)console.log(`Congratulations, ${name}!`);
  else console.log(`Let's try again, ${name}!`);
  return 0;
};

const check = (numberOfAnswers, userAns, rightAns) => {
  if (userAns === rightAns) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'`);
  return false;
};

export { getName, logic, check };
