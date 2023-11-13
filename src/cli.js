import readlineSync from 'readline-sync';

const getName = () => {
    console.log('Welcome to the Brain Games!');
    let userName = readlineSync.question('May I have your name? ');
    console.log('Hello, ' + userName + '!');
    return userName;
};

const logic = (userAnswer, name) => {
    if(userAnswer == undefined)console.log(`Congratulations, ${name}!`);
    else console.log(`Let's try again, ${name}!`);
    return;
}


export { getName, logic };
