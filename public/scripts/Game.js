let canvas, ctx;
let gamePiece;
let walls = [];
let items = [];



let doors = [];



// ------ONLOAD-----
const startGame = () => {	
  canvas = document.getElementById('gameCanvas');
  ctx = canvas.getContext('2d');
	// TIME
	var framesPerSecond = 30;
	setInterval(updateAll, 1000/framesPerSecond);	
	gamePiece = new Player1(15, 15, playerN ,50, 10, 'image');
	makeLevelOne();	
	displayMessage('Level One', 2000);	
}

function displayMessage(text, seconds){
	display = new Component('20px','Arial','white',25, canvas.height-60,'text');
	display.text = text;
	setTimeout(function(){
		display = false
	},seconds);
}

function displayCaption(e, text){
	display = new Component('10px','Monospace','white',e.right, e.top -2, 'text');
	display.text = text;	
	setTimeout(function(){
		display = false
	}, 2000);
}

function playSewer(){
	let sewer = new Audio('sound/sewer.mp3');
	sewer.play();
}

