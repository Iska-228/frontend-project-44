#!/usr/bin/env node


import readlineSync from 'readline-sync';
import { getName, logic } from '../src/cli.js';
const name = getName();

const task = (rightAnswers,name) => {
    const number=Math.floor(Math.random()*100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer: ');
    if((number%2==0&&answer=='yes')||(number%2!=0&&answer=='no')){
        console.log('Correct!');
        rightAnswers++;
    }
    else if(answer=='no'){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'`);
        return false;
    }
    else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'`);
        return false;
    }
    if(rightAnswers==3)return true;
    task(rightAnswers,name);
}

const isEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const a = task(0,name);
    logic(a,name);
}

isEven(name);

export {isEven,task};