// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify);
  applyFilter(decreaseBlue);
  applyFilter(increaseGreenByBlue);
  applyFilterNoBackground(increaseGreenByBlue);
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2, 3 & 5: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let pixel = image[i][j];
      let pixelArray = rgbStringToArray(pixel);

      // TODO 3: Modify the Red value using the RED constant
      reddify(pixelArray);

      let updatedPixel = rgbArrayToString(pixelArray);
      image[i][j] = updatedPixel;
    }
  }
}

// TODO 9 Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      let pixel = image[i][j];

      // ONLY change the pixel if it is NOT the background color
      if (pixel !== "rgb(150, 150, 150)") {
        let pixelArray = rgbStringToArray(pixel);
        filterFunction(pixelArray);
        image[i][j] = rgbArrayToString(pixelArray);
      }
      // If it IS the background, the loop just moves to the next pixel!
    }
  }
}

// TODO 6: Create the keepInBounds function
function keepInBounds(value) {
  return Math.min(255, Math.max(0, value));
}

// TODO 4: Create reddify filter function
function reddify(pixelArray) {
  pixelArray[RED] = 200;
}

// TODO 7 & 8: Create more filter functions
function decreaseBlue(pixelArray) {
  pixelArray[BLUE] = keepInBounds(pixelArray[BLUE] - 50);
}

function increaseGreenByBlue(pixelArray) {
  pixelArray[GREEN] = keepInBounds(pixelArray[GREEN] + pixelArray[BLUE]);
}

// CHALLENGE code goes below here
