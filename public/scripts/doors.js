class Doors extends Component 
{
	constructor(width, height, color, x, y, keyForThisDoor)
	{
		super(width, height, color, x, y);
    // this.name = name; 
    this.keyForThisDoor = keyForThisDoor;
		
	}
}

// update the doors
function updateDoors(){

  doors.forEach(function(door)
  {
		if(door){
      door.draw()}
  })
}

// check if player1 is touching a door
function doorOpen(e)
{
	for(i=0;i<doors.length;i++)
	{
    // collision conditions
    let touching = false;
		if(e.right > doors[i].left && 
			e.left < doors[i].left &&
			e.top < doors[i].bottom  &&
			(doors[i].left - e.left) > (e.width -6) && 		
			e.bottom > doors[i].top) {
        e.x = doors[i].left - e.width;
        touching = true;
      }
		if(e.left < doors[i].right &&
			e.right > doors[i].right &&
			e.top < doors[i].bottom &&
			(e.right - doors[i].right) > (e.width -6) &&
			e.bottom > doors[i].top) {
        e.x = doors[i].right;
        touching = true;
      }
		if(e.bottom > doors[i].top &&
			e.top < doors[i].top &&
			e.right > doors[i].left &&
			e.left < doors[i].right) {
        e.y = doors[i].top - e.height;
        touching = true;
      }
		if(e.top < doors[i].bottom &&
			e.bottom > doors[i].top &&
			e.right > doors[i].left &&
			e.left < doors[i].right) {
        e.y = doors[i].bottom;
        touching = true;
      }
    if(touching){
      if(canvas.keys && canvas.keys[65]){
        if(e.inventory.keys[i] &&
          (e.inventory.keys[i].itemName == (doors[i].keyForThisDoor))) {
        doors[i]=false;
        }
      }
    }
	}
	
}