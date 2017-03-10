var randomSeries = []
var currentDisplay = [randomSeries[0]]
var userInput = []
var count = 0;
var isOn = false;
var isStrict = false;

function game(){
  if(isOn){
    reset()
  }
  // pointer disable for all squares

}
function generateSeries(){
  var num = 5;
  for(var i =0; i < num; i++){
    randomSeries.push(  Math.floor(Math.random() * 4) + 1);
  }
}

function playSequence(count){
  var i = 0
  function play(){
    console.log(currentDisplay[i]);
    i++;
    if( i < count+1){
      setTimeout(play, 1000)
    }
  }
  play()
}

function userMove(value){
  userInput.push(value)
  compareSequence(userInput.length - 1);
}

function compareSequence(element){
    if(compare(currentDisplay[element], userInput[element])){
      console.log('correct input please enter next input')
      if(userInput.length === currentDisplay.length){
        console.log('Enter correct sequence, now add one more')
        userInput = [];
        count++
        if(count === randomSeries.length){
          console.log("you win")
          reset()
        } else {
          currentDisplay.push(randomSeries[count])
          playSequence(count)
        }
      }
    } else {
      if(isStrict){
        reset()
        console.log("strict mode")
      }
      console.log('incorrect')
      playSequence(count)
      userInput = [];
    }
}

function reset(){
  randomSeries = [];
  generateSeries();
  currentDisplay = [randomSeries[0]];
  userInput = [];
  count = 0;
  playSequence(count)
}

function compare(randomSeriesValue, userInputValue){
  return userInputValue === randomSeriesValue;
}
