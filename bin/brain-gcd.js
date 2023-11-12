#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName } from '../src/cli.js';

const name = getName();

const getGcd = (first, second) => {
    for(let i = Math.min(first,second);i > 0; i--){
        if(first%i==0&&second%i==0)return i;
    }
}

const task = (rightAnswers, name) => {
    const first = Math.floor(Math.random()*100);
    const second = Math.floor(Math.random()*100);
    console.log(`Question: ${first} ${second}`);
    const gcdAns = getGcd(first,second);
    let userAnswer = readlineSync.question('Your answer: ');
    if(gcdAns == userAnswer) {
        console.log('Correct!');
        rightAnswers++;
        if(rightAnswers==3)return true;
        task(rightAnswers,name);
    }
    else{
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gcdAns}'`);
        return false;
    }
}

const gcd = (name) => {
    console.log('Find the greatest common divisor of given numbers.');
    const result = task(0,name);
    if(result!=false)console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
}

gcd(name);