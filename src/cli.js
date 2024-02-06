/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export default function getName() {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
}
