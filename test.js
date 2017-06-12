
//var process = require('process');
var readline = require('readline');

var randomNumber = Math.round(Math.random() * 10);

var t = readline.createInterface(
{
  input : process.stdin,
  output : process.stdout
});

t.setPrompt('Guess the number! (0-10): ');
t.prompt();
t.on('line', function(answer)
{
  var answerNum = parseInt(answer);

  if (answerNum > randomNumber)
  {
    console.log('Too high!');
  }

  else if (answerNum < randomNumber)
  {
    console.log('Too low!');
  }

  else if (answerNum === randomNumber)
  {
    console.log('good job!!');
    process.exit(0);
  }

  else
  {
    console.log("please enter another number");
  }

  t.prompt();
});

t.on('close', function()
{
  console.log('wut??? c\'mon son')
  process.exit(1);
});