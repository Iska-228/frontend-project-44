import readlineSync from 'readline-sync';

const getName = () => {
    console.log('Welcome to the Brain Games!');
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

const logic = (userAnswer, name) => {
    console.log(userAnswer);
    if(userAnswer != false)console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
    return;
}

const check = (numberOfAnswers,userAns,rightAns) => {
    if (userAns == rightAns) {
        console.log('Correct!');
        return true;
    }
    else{
        console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${rightAns}'`);
        return false;
    }
}


export { getName, logic, check };