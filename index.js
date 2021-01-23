const readlineSync = require('readline-sync');
const chalk = require('chalk');
console.log(chalk.bgMagentaBright.bold('\t\t\t------Welcome to Sports Trivia------\n'));
let username = readlineSync.question("Enter your Name: \n");
console.log(chalk.yellow.bold('\nHello ' + username + ", This is a quiz on all the happenings in the world of sports. \nThere are four options of each questions. You have to enter your choice. \nHope you will enjoy it!!! \n"));

let countAnswer = 0;
const questionSet = [
  {
    question : ' Who won the ICC Mens Cricket World Cup 2019 ? ',
    options : ['(1) India', '(2) Australia', '(3) New Zealand', '(4) England'],
    answer : 4
  },
  {
    question : ' Who has scored most goals from Indian Football team ? ',
    options : ['(1) Sunil Chhetri', '(2) Bhaichung Bhutia', '(3) IM Vijayan', '(4) Shabbir Ali'],
    answer : 1
  },
  {
    question : ' Who is the captain of India Mens Hockey Team ? ',
    options : ['(1) Sandeep Singh', '(2) Akshdeep Singh', '(3) Manpreet Singh', '(4) Mandeep Singh'],
    answer : 3
  },
  {
    question : ' Which team has conquered Australian cricket team fortess Gabba by defeating them after 32 years on January 19, 2021 ?',
    options : ['(1) England', '(2) India', '(3) South Africa', '(4) West Indies'],
    answer : 2
  },
  {
    question : ' How many Gold medals Indian athletes have won in Olympics ?',
    options : ['(1) 5', '(2) 7', '(3) 21', '(4) 9'],
    answer : 4
  }
];
const trivia = function quizApp(question,options,answer,i)
{
    console.log('['+i+']'+ question,"\n");
    console.log(options.join("\n"));
    let userAnswer = parseInt(readlineSync.question("Your answer is: "));
    
    if(userAnswer === answer)
    {
      console.log(chalk.red.bold('\nWelldone!, You are Right.\n'));
      countAnswer++;
    }
    else
    {
      console.log(chalk.red.bold('\nSorry mate, You are Wrong.\n'));
      console.log(chalk.yellow.bold('The Correct Answer is: ',options[answer-1] + "\n"));
    }
}

for(let i = 0;i < questionSet.length; i++) 
{
  trivia(questionSet[i].question,questionSet[i].options,questionSet[i].answer,i+1);
}

if(countAnswer === questionSet.length)
{
  console.log(chalk.green.bold('Congratulations!, '+ username+ ' your total score is: '+countAnswer+'/'+questionSet.length+'\n'));
}
else if(countAnswer === questionSet.length-1)
{
  console.log(chalk.magenta.bold('Good Job!, '+ username+ ' your total score is: '+countAnswer+'/'+questionSet.length+'\n'));
}
else
{
  console.log(chalk.blue.bold('Hard Luck!, '+ username+ ' your total score is: '+countAnswer+'/'+questionSet.length+'\n'));
}

console.log(chalk.bgMagentaBright.bold('\t\t\t------Thank You!!!------\n'));