/* eslint-disable no-console */

const logic = (userAnswer, name) => (userAnswer !== false ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`));

const check = (numberOfAnswers, userAns, rightAns) => {
  if (userAns === rightAns) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'`);
  return false;
};

export { logic, check };
