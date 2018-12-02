let long = 6;
let high = 6;



function makeWalls() {

	walls.push(new Component (18*long, 1*high, 'lightblue', 0, 10*high));
  walls.push(new Component (60*long, 1*high, 'lightblue', 21*long, 10*high));
  
  walls.push(new Component ( 1*long, 89*high, 'lightblue', 80*long, 11*high));

  walls.push(new Component (25*long, 1*high, 'lightblue', 0, 30*high)); 
  walls.push(new Component (52*long, 1*high, 'lightblue', 28*long, 30*high));
  
  walls.push(new Component (50*long, 1*high, 'lightblue', 0, 45*high));
  walls.push(new Component (50*long, 1*high, 'lightblue', 53*long, 45*high));

}

function makeDoors() {
  doors.push(new Doors(3*long, 1*high, 'red', 18*long, 10*high, 'key1'));
  doors.push(new Doors(3*long, 1*high, 'red', 25*long, 30*high, 'key2'));
  doors.push(new Doors(3*long, 1*high, 'red', 50*long, 45*high, 'key3'));
}

function makeItems() {
  items.push(new Items(26, 10, img, 13*long, 5*high, 'doorKey', 'key1'));  
  items.push(new Items(26, 10, img, 25*long, 20*high, 'doorKey', 'key2'));
  items.push(new Items(26, 10, img, 50*long, 35*high, 'doorKey', 'key3'));
  console.log(items);
	// items.push(key1, key2, key3);

}