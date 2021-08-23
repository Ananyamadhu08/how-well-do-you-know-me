//take input from the user and welcome the user

var readlineSync = require('readline-sync');

function welcome() {
  var userName = readlineSync.question('What is your name? ');

  console.log('Welcome ' + userName + '!' + ' How well do you know me?');
  console.log
}

var highScore = [
  {
    name: "Sundar",
    score: 8
  },
  {
    name: "Elon",
    score: 7
  },
  {
    name: "Jeff",
    score: 6
  }
]


//assign a function to play the questions 

var score = 0;

function play(question,answer){

  var userAnswer = readlineSync.question(question);

  console.log('You entered ' + userAnswer);

  if (userAnswer.toUpperCase() === answer.toUpperCase()){

    console.log('You are right!');
  console.log("/n")


    score = score + 1;
  } else {

    console.log('You are wrong!');
  console.log("/n")

  }

  console.log('Your score is: ' + score);

  console.log('----------------------------------------')
}


//create an array of questions you want to ask the user

var userQuestions = [

  {
    question: 'How old am I? ',
    answer: '21'
  },

  {
    question: 'Which country am I from? ',
    answer: 'India'
  },

  {
    question: 'Which school did I go to? ',
    answer: 'Primus'
  },

  {
    question: 'Which degree am I currently pursuing? ',
    answer: 'BBA'
  },

  {
    question: 'Do I have any pets? ',
    answer: 'Yes'
  },

  {
    question: 'What is my favorite color? ',
    answer: 'Black'
  },

  {
    question: 'What is my favorite cuisine? ',
    answer: 'Italian'
  },

  {
    question: 'Who is my favorite superhero? ',
    answer: 'Deadpool'
  },

  {
    question: 'What do I prefer tea or coffee? ',
    answer: 'Coffee'
  },

  {
    question: 'What do I prefer night or day? ',
    answer: 'Night'
  }
]


//use for loop to play the questions 

function game() {
  for (var i = 0; i < userQuestions.length; i++){

  var currentQuestion = userQuestions[i];

  play(currentQuestion.question, currentQuestion.answer)
}}


//print final score

function showScore() {
  console.log('Yay! Your total score is: ' + score);

  console.log("Check out the high scores, if you should be there ping me and i'll update it");

  highScore.map(score => console.log(score.name, ":", score.score))
}

welcome();
game();
showScore();