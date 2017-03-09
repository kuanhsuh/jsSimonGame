var randomSeries = [1,2,3,4,1,2,3,4]
var currentDisplay = []
var userInput = []
var count = 4;

function generateSeries(){
  var num = 20;
  for(var i =0; i < 20; i++){
    randomSeries.push(  Math.floor(Math.random() * 4) + 1);
  }
}

// function compare(randomSeries, userInput){
//   var userInputLength = userInput.length
//   for(var i =0; i< userInputLength; i++){
//     if(userInput[i]!=randomSeries[i]){
//       console.log(`You have enter the wrong input in step ${i}`)
//     } else {
//       console.log('Correct')
//     }
//   }
// }
// var i = 0, howManyTimes = 10;
// function f() {
//     alert( "hi" );
//     i++;
//     if( i < howManyTimes ){
//         setTimeout( f, 1000 );
//     }
// }
// f();

function playSequence(count){
  // debugger;
  var i = 0
  function play(){
    console.log(randomSeries[i]);
    i++;
    if( i < count){
      setTimeout(play, 1000)
    }
  }
  play()
}
function updateDisplay(i){
  currentDisplay.push(randomSeries[i]);
  console.log(currentDisplay)
  console.log('Enter your next move')
}

function userMove(value){
  userInput.push(value)
  compareSequence(userInput, currentDisplay);
}

function compareSequence(input, sequence){
  var currentElement = input.length - 1
  if(count < sequence){

  }
  if(compare(currentDisplay[currentElement], userInput[currentElement])){
    console.log('correct')
    count++;
    updateDisplay(count);
    userInput = [];
  } else {
    console.log("Input is wrong")
    console.log("Fn print out series again")
  }
}
function compare(randomSeriesValue, userInputValue){
  return userInputValue === randomSeriesValue;
}

//[X]need a array to hold 20 random series
//[X]need a function to generate 20 random numbers with range of 1-4

//[x]need something to hold user button
//[x]need function to compare user input vs answer
//need function to split out next sequence after correct input

//need function to play sound

//if function compare is wrong, original sequence starts again, user need to display try again

//display how many steps in the current series of button

//reset button

//strict mode when function compare is wrong
//game generate new random series

//getting series of 20 steps correct
