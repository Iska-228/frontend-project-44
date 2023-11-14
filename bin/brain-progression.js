#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getName, logic } from '../src/cli.js';

const name = getName();

const task = (rightAnswers, name) => {
    const progKolvoEl = 10;//*(max-min)+min
    const progN = Math.floor(Math.random()*29+1);
    const firstEl = Math.floor(Math.random()*19+1);
    const arr = [];
    arr.push(firstEl);
    for(let i =0; i < progKolvoEl; i++){
        arr.push(arr[i]+progN);
    }
    const censPos = Math.floor(Math.random()*(progKolvoEl-1)+1);
    const rightAnsw=arr[censPos];
    arr[censPos] = '..';
    console.log(`Question ${arr.join(" ")}`);
    let userAnswer = readlineSync.question('Your answer: ');
    if(userAnswer==rightAnsw){
        console.log('Correct!');
        rightAnswers++;
        if(rightAnswers==3)return true;
        return task(rightAnswers,name);
        
    }
    else{
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnsw}'`);
        return false;
    }
}

const progression = (name) => {
    console.log('Find the greatest common divisor of given numbers.');
    const result = task(0,name);
    logic(result,name);
}

progression(name);