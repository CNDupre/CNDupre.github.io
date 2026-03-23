$(document).ready(function () {
  // Your code goes here
});

function makeDot(top, left, dieID){
  $("<div>")
    .css("height", 15)
    .css("width", 15)
    .css("background-color", "black")
    .css("position", "absolute")
    .css("top", top)
    .css("left", left)
    .appendTo(dieID);


}
makeDot(50, 50, "#die"); // middle middle
makeDot(25, 25, "#die"); // top left
makeDot(75, 75, "#die"); // bottom right


function rollDie(dieID){
  $(dieID).empty();
  var randomNum = Math.ceil(Math.random() * 6);
  console.log(randomNum);

    if (randomNum === 1) {
    makeDot(50, 50, dieID); // middle middle
  } else if (randomNum === 2) {
    makeDot(25, 25, dieID); // top left
    makeDot(75, 75, dieID); // bottom right
  } else if (randomNum === 3) {
    makeDot(25, 25, dieID); // top left
    makeDot(75, 75, dieID); // bottom right
    makeDot(50, 50, dieID); // middle middle
  } else if (randomNum === 4) {
    makeDot(75, 75, dieID); // bottom right
    makeDot(25, 25, dieID); // top left
    makeDot(25, 75, dieID); // bottom left
    makeDot(75, 25, dieID); // top right
  } else if (randomNum === 5) {
    makeDot(50, 50, dieID); // middle middle
    makeDot(75, 75, dieID); // bottom right
    makeDot(25, 25, dieID); // top left
    makeDot(25, 75, dieID); // bottom left
    makeDot(75, 25, dieID); // top right
  }
   else if (randomNum === 6) {
    // Left Column
    makeDot(25, 25, dieID); // top left
    makeDot(50, 25, dieID); // middle left
    makeDot(75, 25, dieID); // bottom left

    // Right Column
    makeDot(25, 75, dieID); // top right
    makeDot(50, 75, dieID); // middle right
    makeDot(75, 75, dieID); // bottom right
  }
}

function handleClick(){
  rollDie("#die")
}
$("#die").on("click", handleClick);