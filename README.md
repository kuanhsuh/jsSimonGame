V1.
https://www.freecodecamp.com/challenges/build-a-simon-game
//
<!-- 3.9 Finish Display sequence
Need compare Input function -->

//need a array to hold 20 random series
//need a function to generate 20 random numbers with range of 1-4
User Story: I am presented with a random series of button presses.

//need something to hold user button
//need function to compare user input vs answer
//need function to split out next sequence after correct input
User Story: Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.

//need function to play sound
User Story: I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.

//if function compare is wrong, original sequence starts again, user need to display try again
User Story: If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.

//display how many steps in the current series of button
User Story: I can see how many steps are in the current series of button presses.

//reset button
User Story: If I want to restart, I can hit a button to do so, and the game will return to a single step.

//strict mode when function compare is wrong
//game generate new random series
User Story: I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.

//getting series of 20 steps correct
User Story: I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

Hint: Here are mp3s you can use for each button: https://s3.amazonaws.com/freecodecamp/simonSound1.mp3, https://s3.amazonaws.com/freecodecamp/simonSound2.mp3, https://s3.amazonaws.com/freecodecamp/simonSound3.mp3, https://s3.amazonaws.com/freecodecamp/simonSound4.mp3.
