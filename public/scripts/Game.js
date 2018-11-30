var canvas, ctx;
canvas = document.getElementById('gameCanvas');
ctx = canvas.getContext('2d');

let gamePiece;
let walls = [];

// ------ONLOAD-----
const startGame = () => {	
	// TIME
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);
	// THINGS ON SCREEN
	gamePiece = new Player1(15, 15, 'green',50, 10);
	makeWalls();	
	display = new Component('20px','Arial','white',30, canvas.height-60,'text');
}
