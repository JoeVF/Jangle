let canvas, ctx;
let gamePiece;
let walls = [];
let items = [];
let key1, key2, key3;
let img = document.getElementById('img');
let doors = [];
// let doorKeys = [];


// ------ONLOAD-----
const startGame = () => {	
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
	// TIME
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	
	gamePiece = new Player1(15, 15, 'green',50, 10);
	makeLevel();	
}

function makeLevel(){
	makeWalls();
	makeItems();
	makeDoors();
}

// display = new Component('20px','Arial','white',30, canvas.height-60,'text');
