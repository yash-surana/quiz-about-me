var readlineSync = require("readline-sync");
const chalk = require("chalk") ;
var userName = readlineSync.question("Please enter your name : ");
var yellow = chalk.keyword('yellow')
console.log(yellow`
Welcome {bold ${userName}} to the {underline How much Do you know Yash} quiz
`);
console.log("\nAnswer only by entering a number as applicable to the question.")


var score = 0;

var scoreList = [{name:"Gaurav",userScore:2
},{
  name:"Akansha", userScore : 1
}
] 
var highscore = [{name: "Gaurav", userScore:2}];
var firstPlayer = highscore[0]
var correctAnswer = chalk.cyanBright.bold
var wrong = chalk.redBright.bold
// // function for questions and answer
function play(question,answer){
  console.log("-----------------")
  var answerGiven = readlineSync.question(question+"\nAnswer : ")

  if (answerGiven.toUpperCase() === answer.toUpperCase()){
    console.log(correctAnswer("You got that right! "));
    score = score+ 1
  } else {
    console.log(wrong("Wrong answer. Got to learn that about him now! "));
    console.log("The right answer was", chalk.bold(answer));
  }
  console.log(yellow(chalk.bold`Your current score is {bgBlack ${score} }`));
}

// // array of questions
var questionsArray = [{question : "Yash's favourite show out of these? \n1. Brookyln Nine Nine \n2. Breaking Bad \n3. Friends ", answer : "1"},
{question : "What do I love more? \n1. Adventure \n2. Animals \n3. Movies ",
answer : "1"},
{question : "Favourite Dessert? \n1. Cheescake \n2. Ice-cream \n3. Waffle ",
answer : "2"}
]

// // for loop to ask questions
function askQuestions(){
  for (var i = 0; i<questionsArray.length; i++){
    var questions = questionsArray[i]
    console.log(play(questions.question,questions.answer));
  }
  console.log("-----------------")
  console.log(yellow(chalk.bold`Your final score is {bgBlack ${score} }`));
}
console.log(askQuestions());

if (score>firstPlayer.userScore){
  console.log(yellow.bold`Congratulations! You know Yash better than anyone else. You got ${score} points.`)
  highscore = {name : userName, userScore : score}
}else if (score===firstPlayer.userScore){
  console.log(chalk.cyanBright.bold`Ohh! Someone else also knows Yash well! You are tied for the first position with ${firstPlayer.name} at ${score} points`);
  highscore.push({name : userName, userScore : score});
}else{
  console.log(chalk.redBright.bold`You missed the top spot by ${firstPlayer.userScore - score} points. Keep trying!`)
  console.log(yellow`The high score is held by ${firstPlayer.name} with ${firstPlayer.userScore} points.`)
}

// if else statement to continue game
if(readlineSync.keyInYN(chalk.bold.underline("Do you want to play again? "))){
  var score = 0
  console.log(askQuestions());
}else {
  // Another key was pressed.
  console.log(chalk.bold('\nAlright Byee'));
}

