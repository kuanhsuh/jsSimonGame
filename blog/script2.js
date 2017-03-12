function playSequence(count) {
  var i = 0;

  function play() {
    console.log(model.currentDisplay[i]);
    i++;
    if (i < count + 1) {
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

  game: function() {
    if (this.isOn) {
      this.reset()
    }
  },
  reset: function() {
    this.randomSeries = [];
    this.generateSeries();
    this.currentDisplay = [this.randomSeries[0]];
    this.userInput = [];
    this.count = 0;
    playSequence(this.count)
  },
  generateSeries: function() {
    var num = 5;
    for (var i = 0; i < num; i++) {
      this.randomSeries.push(Math.floor(Math.random() * 4) + 1);
    }
  },
  userMove: function(value) {
    this.userInput.push(value)
    this.compareSequence(this.userInput.length - 1);
  },
  compareSequence: function(element) {
    if (this.compare(element)) {
      if (this.isLastUserInput()) {
        this.userInput = [];
        this.count++
          if (this.isWon()) {
            console.log("WON")
            this.reset()
          } else {
            this.currentDisplay.push(this.randomSeries[this.count])
            playSequence(this.count)
          }
      }
    } else {
      if (this.isStrict) {
        this.reset()
        console.log("strict mode")
      }
      console.log('incorrect')
      playSequence(this.count)
      this.userInput = [];
    }
  },
  compare: function(element) {
    return this.currentDisplay[element] === this.userInput[element]
  },
  isLastUserInput: function() {
    return this.userInput.length === this.currentDisplay.length
  },
  isWon: function() {
    return this.count === this.randomSeries.length
  }
}
