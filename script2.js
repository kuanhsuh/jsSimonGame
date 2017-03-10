function playSequence(count){
  var i = 0
  function play(){
    console.log(model.currentDisplay[i]);
    i++;
    if( i < count+1){
      setTimeout(play, 1000)
    }
  }
  play()
}

var model = {
  randomSeries: [],
  userInput: [],
  count: 0,
  isOn: false,
  isStrict: false,

  game: function(){
    if(this.isOn){
      this.reset()
    }
  },
  reset: function(){
    this.randomSeries = [];
    this.generateSeries();
    this.currentDisplay = [this.randomSeries[0]];
    this.userInput = [];
    this.count = 0;
    playSequence(this.count)
  },
  generateSeries: function(){
    var num = 5;
    for(var i =0; i < num; i++){
      this.randomSeries.push(Math.floor(Math.random() * 4) + 1);
    }
  },
  userMove: function(value){
    this.userInput.push(value)
    this.compareSequence(this.userInput.length - 1);
  },
  compareSequence: function(element){
    if(this.compare(this.currentDisplay[element], this.userInput[element])){
      console.log('correct input please enter next input')
      if(this.userInput.length === this.currentDisplay.length){
        console.log('Enter correct sequence, now add one more')
        this.userInput = [];
        this.count++
        if(this.count === this.randomSeries.length){
          console.log("you win")
          this.reset()
        } else {
          this.currentDisplay.push(this.randomSeries[this.count])
          playSequence(this.count)
        }
      }
    } else {
      if(this.isStrict){
        this.reset()
        console.log("strict mode")
      }
      console.log('incorrect')
      playSequence(this.count)
      this.userInput = [];
    }
  },
  compare: function(randomSeriesValue, userInputValue){
    return userInputValue === randomSeriesValue;
  }
}
// function compare(randomSeriesValue, userInputValue){
//   return userInputValue === randomSeriesValue;
// }

// function userMove(value){
//   userInput.push(value)
//   compareSequence(userInput.length - 1);
// }

// function compareSequence(element){
//     if(compare(currentDisplay[element], userInput[element])){
//       console.log('correct input please enter next input')
//       if(userInput.length === currentDisplay.length){
//         console.log('Enter correct sequence, now add one more')
//         userInput = [];
//         count++
//         if(count === randomSeries.length){
//           console.log("you win")
//           reset()
//         } else {
//           currentDisplay.push(randomSeries[count])
//           playSequence(count)
//         }
//       }
//     } else {
//       if(isStrict){
//         reset()
//         console.log("strict mode")
//       }
//       console.log('incorrect')
//       playSequence(count)
//       userInput = [];
//     }
// }
//
// function reset(){
//   randomSeries = [];
//   generateSeries();
//   currentDisplay = [randomSeries[0]];
//   userInput = [];
//   count = 0;
//   playSequence(count)
// }
//
// function compare(randomSeriesValue, userInputValue){
//   return userInputValue === randomSeriesValue;
// }
