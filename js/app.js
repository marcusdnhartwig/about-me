'use strict';

//welcome message
let firstName = prompt('What is your name?');
alert(`Hey ${firstName}, it's great to have you visiting my website!`);

//guessing game
alert('Before I let you onto my website your going to play a guessing game to learn some facts about me. Read? LETS GO!');

//first question
let answerOne = prompt('Did I go to college for Chemistry?').toLowerCase().trim();
if(answerOne === 'yes' || answerOne === 'y'){
  alert(`Yes ${firstName} that's correct.`);
}
else if(answerOne === 'no' || answerOne === 'n'){
  alert(`No ${firstName} that's incorrect.`);
}
else{
  alert(`Sorry ${firstName}, but you entered an invalid answer. Let's move on!`);
}
