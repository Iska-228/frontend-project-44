#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const name = getName();

const task = (rightAnswers,name) => {
    const number = Math.floor(Math.random()*121);
    let isPrime = 'yes';
    for(let i = 2;i<number;i++){
        if (number%i==0) {
            isPrime = 'no';
            break;
        }
    }
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer: ');
    if (answer == isPrime) {
        console.log('Correct!');
        rightAnswers++;
        if(rightAnswers == 3) return true;
        task(rightAnswers,name);
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime}'`);
        return false;
    }
}

const prime = (name) => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    const result = task(0,name);
    if(result!=false)console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
}

prime(name);