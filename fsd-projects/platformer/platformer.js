$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
  

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(400,605.5,25, 10,)
    createPlatform(350, 475.5, 100, 10,)
    createPlatform(350, 350, 101, 10)
    createPlatform(350,217,98,10)
    createPlatform(3, 475.5, 100, 10)
    createPlatform(800,1, 1,800)
    createPlatform(75, 100, 100, 10,);
    // TODO 3 - Create Collectables
    createCollectable("database", 75, 60)
    createCollectable("database", 30,435)
    createCollectable("database", 375, 300)
    
    // TODO 4 - Create Cannons
    createCannon("top", 555, 975)
    createCannon("top", 375, 950);
    createCannon("right", 415, 1100)
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
