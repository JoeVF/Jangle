function makeWalls() {

	door1 = new Component(15, 10, 'red', 220, 60);

	walls.push(new Component (220, 10, 'lightblue', 0, 60));
	walls.push(new Component (220, 10, 'lightblue', 235, 60));
	walls.push(new Component (10, 120, 'lightblue', 235, 70));
	walls.push(new Component (235, 10, 'lightblue', 0, 180));
	walls.push(new Component (10, 450, 'lightblue', 445, 70));

	walls.push(door1);
	// walls.push(new Component (10, canvas.height-150, 'lightblue', 445, 70));
	// walls.push(new Component (10, canvas.height-150, 'lightblue', 445, 70));

}

// update the walls
function updateWalls(){

  walls.forEach(function(wall)
  {
		if(wall){
      wall.draw()}
  })
}
// break wall
function openDoor(){
  if (canvas.keys && canvas.keys[65]) {turnScreenPink()}
}