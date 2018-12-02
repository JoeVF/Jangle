let long = 6;
let high = 6;


function makeLevelOne() {
  function makeWalls() {
    // first row walls
    walls.push(new Component (18*long, 1*high, 'gray', 0, 10*high));
    walls.push(new Component (60*long, 1*high, 'gray', 21*long, 10*high));
    // vertical wall
    walls.push(new Component ( 1*long, 34*high, 'gray', 80*long, 11*high));
    // second row
    walls.push(new Component (25*long, 1*high, 'gray', 0, 30*high));   
    walls.push(new Component (52*long, 1*high, 'gray', 28*long, 30*high));
    // last row
    walls.push(new Component (50*long, 1*high, 'gray', 0, 45*high));
    walls.push(new Component (50*long, 1*high, 'gray', 53*long, 45*high));
    // vertical group
    walls.push(new Component ( 1*long, 10*high, 'gray', 20*long, 46*high));
    walls.push(new Component ( 1*long, 10*high, 'gray', 20*long, 59*high));  

  }

  function makeDoors() {
    doors.push(new Doors(3*long, 1*high, 'tan', 18*long, 10*high, 'key1'));
    doors.push(new Doors(3*long, 1*high, 'tan', 25*long, 30*high, 'key2'));
    doors.push(new Doors(3*long, 1*high, 'tan', 50*long, 45*high, 'key3'));
    doors.push(new Doors(1*long, 3*high, 'tan', 20*long, 56*high, 'key4'));
  }

  function makeItems() {
    items.push(new Items(26, 10, img, 13*long, 5*high, 'doorKey', 'key1'));  
    items.push(new Items(26, 10, img, 25*long, 20*high, 'doorKey', 'key2'));
    items.push(new Items(26, 10, img, 50*long, 35*high, 'doorKey', 'key3'));
    items.push(new Items(26, 10, img, 80*long, 50*high, 'doorKey', 'key4'));
  }
 
  makeWalls();
  makeItems();
  makeDoors();
  
}


function makeLevelTwo() {
  walls.length = 0;
  doors.length = 0;
  items.length = 0;
  gamePiece.inventory.keys.length=0;
  function makeWalls(){
    walls.push(new Component (100*long, 4*high, 'black', 0, 0));
    walls.push(new Component (5*long, 400, 'black', 0, 0));
    walls.push(new Component (3*long, 2*high, wallCorner01, 3*long, 4*high, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 6*long, 4*high, 'image'));
    walls.push(new Component (3*long, 2*high, wallCorner01, 24*long, 4*high, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 27*long, 4*high, 'image'));
    walls.push(new Component (3*long, 2*high, wallCorner01, 45*long, 4*high, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 48*long, 4*high, 'image'));
    walls.push(new Component (3*long, 2*high, wallCorner01, 66*long, 4*high, 'image')); 

    // grey floor (3 rows)
    walls.push(new Component (0, 0, floor01, 5*long, 14*high, 'image'));
    walls.push(new Component (0, 0, floor01, 15*long, 14*high, 'image'));
    walls.push(new Component (0, 0, floor01, 25*long, 14*high, 'image'));
    walls.push(new Component (0, 0, floor01, 35*long, 14*high, 'image'));
    walls.push(new Component (0, 0, floor01, 45*long, 14*high, 'image'));
    walls.push(new Component (0, 0, floor01, 47*long, 14*high, 'image'));

    walls.push(new Component (0, 0, floor01, 5*long, 24*high, 'image'));
    walls.push(new Component (0, 0, floor01, 15*long, 24*high, 'image'));
    walls.push(new Component (0, 0, floor01, 25*long, 24*high, 'image'));
    walls.push(new Component (0, 0, floor01, 35*long, 24*high, 'image'));
    walls.push(new Component (0, 0, floor01, 45*long, 24*high, 'image'));
    walls.push(new Component (0, 0, floor01, 47*long, 24*high, 'image'));

    walls.push(new Component (0, 0, floor01, 5*long, 27*high, 'image'));
    walls.push(new Component (0, 0, floor01, 15*long, 27*high, 'image'));
    walls.push(new Component (0, 0, floor01, 25*long, 27*high, 'image'));
    walls.push(new Component (0, 0, floor01, 35*long, 27*high, 'image'));
    walls.push(new Component (0, 0, floor01, 45*long, 27*high, 'image'));
    walls.push(new Component (0, 0, floor01, 47*long, 27*high, 'image'));

    // 2nd row walls
    walls.push(new Component (18*long, 2*high, wall03, 5*long, 12*high, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 23*long, 12*high, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 41*long, 12*high, 'image'));
    // 3rd row walls
    walls.push(new Component (18*long, 2*high, wall03, 3*long+2, 38*high-3, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 21*long+2, 38*high-3, 'image'));
    walls.push(new Component (18*long, 2*high, wall03, 39*long+2, 38*high-3, 'image'));
    // walls.push(new Component (18*long, 2*high, wall03, 41*long, 12*high, 'image'));
    // vertical walls outside 
    walls.push(new Component (2*long, 18*high, wall03V, 3*long, 6*high, 'image'));
    walls.push(new Component (2*long, 18*high, wall03V, 3*long, 24*high, 'image'));
    walls.push(new Component (2*long, 18*high, wall03V, 3*long, 42*high, 'image'));
    walls.push(new Component (2*long, 18*high, wall03V, 3*long, 60*high, 'image'));


    walls.push(new Component (2*long, 18*high, wall03V, 67*long, 6*high, 'image'));
    walls.push(new Component (2*long, 18*high, wall03V, 67*long, 24*high, 'image'));
    walls.push(new Component (2*long, 18*high, wall03V, 67*long, 42*high, 'image'));
    // vertical wall inside
    walls.push(new Component (2*long, 8*high, wall03VHalf, 57*long, 14*high, 'image'));
    walls.push(new Component (2*long, 3*high, wallCorner01V, 57*long, 22*high, 'image'));
    walls.push(new Component (2*long, 3*high, wallCorner01V, 57*long, 28*high, 'image'));
    walls.push(new Component (2*long, 8*high, wall03VHalf, 57*long, 31*high, 'image'));
    // grass outside (1st column)
    walls.push(new Component (0, 0, grass01, 69*long, 4*high, 'image'));
    walls.push(new Component (0, 0, grass01, 69*long, 14*high, 'image'));
    walls.push(new Component (0, 0, grass01, 69*long, 24*high, 'image'));
    walls.push(new Component (0, 0, grass01, 69*long, 34*high, 'image'));
    walls.push(new Component (0, 0, grass01, 69*long, 44*high, 'image'));
    walls.push(new Component (0, 0, grass01, 69*long, 47*high, 'image'));
    // grass outside (2nd column)
    walls.push(new Component (0, 0, grass01, 79*long, 4*high, 'image'));
    walls.push(new Component (0, 0, grass01, 79*long, 14*high, 'image'));
    walls.push(new Component (0, 0, grass01, 79*long, 24*high, 'image'));
    walls.push(new Component (0, 0, grass01, 79*long, 34*high, 'image'));
    walls.push(new Component (0, 0, grass01, 79*long, 44*high, 'image'));
    walls.push(new Component (0, 0, grass01, 79*long, 47*high, 'image'));

    
  }
  function makeDoors(){
    doors.push(new Doors(1*long, 3*high, 'tan', 58*long, 25*high, 'key1'));
  }
  function makeItems(){
    items.push(new Items(26, 10, img, 80*long, 50*high, 'doorKey', 'key1'));
  }
  
  makeWalls();
  makeItems();
  makeDoors();

  displayMessage('Level Two', 2000);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0, 100*long, 4*high);
  
}
// choose floor texture

// let floor = stoneFloor3; // this needs to be inside the level one function

function makeFloor(image) {
  for(y=0;y<Math.ceil(canvas.height/image.height);y++){
    for(x=0;x<Math.ceil(canvas.width/image.width);x++){
      ctx.drawImage(image, x*image.width, y*image.height)
    }
  }  
}

let TO_RADIANS = Math.PI/180; 
function drawRotatedImage(image, x, y, angle) { 
 
	// save the current co-ordinate system 
	// before we screw with it
	ctx.save(); 
 
	// move to the middle of where we want to draw our image
	ctx.translate(x, y);
 
	// rotate around that point, converting our 
	// angle from degrees to radians 
	ctx.rotate(angle * TO_RADIANS);
 
	// draw it up and to the left by half the width
	// and height of the image 
	ctx.drawImage(image, -(image.width/2), -(image.height/2));
 
	// and restore the co-ords to how they were when we began
	ctx.restore(); 
}