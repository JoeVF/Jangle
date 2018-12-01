let canvas, ctx;
let gamePiece;
let walls = [];
let items = [];
let key1;
let img = document.getElementById('img');


// ------ONLOAD-----
const startGame = () => {	
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
	// TIME
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	// THINGS ON SCREEN
	gamePiece = new Player1(15, 15, 'green',50, 10);
	makeWalls();
	makeItems();
	display = new Component('20px','Arial','white',30, canvas.height-60,'text');
	
}
