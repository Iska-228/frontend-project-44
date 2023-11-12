#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';
const name = getName();

const exp = (rightAnswers,name) => {
    if(rightAnswers === 3) {
        return true;
    }
    const first = Math.floor(Math.random()*100);
    const second = Math.floor(Math.random()*100);
    const pmm = Math.floor(Math.random()*100)%3;
    let operation = ''
    switch (pmm) {
        case 0:
            operation = '+';
            break;
        case 1:
            operation = '-';
            break;
        case 2:
            operation = '*';
            break;
    }
    console.log(`Question: ${first} ${operation} ${second}`);
    let userAnswer = readlineSync.question('Your answer: ');
    let rightAnsw = 0;
    switch (operation) {
        case '+':
            rightAnsw=first+second;
            break;
        case '-':
            rightAnsw=first-second;
            break;
        case '*':
            rightAnsw=first*second;
            break;
    }
    if(userAnswer == rightAnsw) {
        console.log('Correct!');
        rightAnswers++;
        exp(rightAnswers, name);
    }
    else{
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
        return false;
    }
}

const calc = (name) => {
    console.log('What is the result of the expression?');
    const a = exp(0,name);
    if(a==undefined)console.log(`Congratulations, ${name}`);
    else console.log(`Let's try again, ${name}!`);
}

calc(name);