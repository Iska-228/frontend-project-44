/* eslint-disable */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const getName = () => {
    console.log('Welcome to the Brain Games!');
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

export { getName };
