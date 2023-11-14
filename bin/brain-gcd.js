#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName,logic, check } from '../src/cli.js';

const name = getName();

const getGcd = (first, second) => {
    for(let i = Math.min(first,second);i > 0; i--){
        if(first%i==0&&second%i==0)return i;
    }
}

const task = (rightAnswers) => {
    if(rightAnswers==3)return true;
    const first = Math.floor(Math.random()*100);
    const second = Math.floor(Math.random()*100);
    console.log(`Question: ${first} ${second}`);
    const gcdAns = getGcd(first,second);
    let userAnswer = readlineSync.question('Your answer: ');
    const abo = check(rightAnswers,userAnswer,gcdAns);
    if(abo == true) {
        rightAnswers+=1;
        return task(rightAnswers);
    }
    else return false;
}

const gcd = (name) => {
    console.log('Find the greatest common divisor of given numbers.');
    const result = task(0,name);
    logic(result,name);
}

gcd(name);