function playSequence(count) {
  var i = 0;

  function play() {
    console.log(model.currentDisplay[i]);
    view.showBoardHighlight(model.currentDisplay[i])
    i++;
    if (i < count + 1) {
      setTimeout(play, 1000)
    }
  }
  setTimeout( play, 1000);
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
        this.count++;
        view.updateCount(this.count)
          if (this.isWon()) {
            console.log("WON")
            // this.reset()
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
      view.showError()
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


var handler = {
  userMove: function(e){
    view.showBoardHighlight(e.textContent * 1)
    model.userMove(e.textContent * 1)
  }

}

var view = {
  showBoardHighlight: function(i){
    $(`#square${i}`).addClass('highlight').delay(500).queue(function(next){
      $(this).removeClass('highlight')
      next()
    })
  },
  updateCount: function(i){
    $("#count").text(i)
  },
  showError: function(){
    $("#count").text("!!!").delay(800).queue(function(next){
          view.updateCount(model.count)
          next()
    })
  }
}

//start event handler
//stict mode
