/* eslint-disable */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import readlineSync from 'readline-sync';

const task = (rightAnswers,name) => {
    const number=Math.floor(Math.random()*100);
    console.log(`Question: ${number}`);
    let answer = readlineSync.question('Your answer: ');
    if((number%2==0&&answer=='yes')||(number%2!=0&&answer=='no')){
        console.log('Correct!');
        rightAnswers++;
    }
    else if(answer=='no'){
        console.log(`'no' is wrong answer ;(. Correct answer was 'yes'`);
        console.log(`Let's try again, ${name}`);
        rightAnswers=0;
    }
    else {
        console.log(`'yes' is wrong answer ;(. Correct answer was 'no'`);
        console.log(`Let's try again, ${name}`);
        rightAnswers=0;
    }
    if(rightAnswers==3)return;
    task(rightAnswers,name);
}

const isEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    task(0,name);
    console.log(`Congratulations, ${name}!`);
}

export {isEven,task};