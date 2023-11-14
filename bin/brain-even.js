#!/usr/bin/env node


import readlineSync from 'readline-sync';
import { getName, logic } from '../src/cli.js';
const name = getName();

const task = (rightAnswers,name) => {
    const number=Math.floor(Math.random()*100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer: ');
    let rightAns = number % 2 == 0 ? 'yes' : 'no';
    if(rightAns==answer){
        console.log('Correct!');
        rightAnswers+=1;
        if(rightAnswers==3)return true;
        return task(rightAnswers,name);
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAns}'`);
        return false;
    }
}

const isEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const a = task(0,name);
    console.log(a);
    logic(a,name);
}

isEven(name);

export {isEven,task};