// UPDATING THE SCREEN
function updateAll() {
	drawAll();
	moveAll();
}

function moveAll() {
	gamePiece.newPos();	
	// erica.newPos();	
}

function drawAll() {
	clearScreen();
	gamePiece.update();
	display.text = `The Amazing Game`;
	updateWalls();
	display.update();
}

// clear the screen
function clearScreen(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// sample function tied to 'b' key
function turnScreenPink(){
	console.log('Sample event fired.');
	canvas.style.backgroundColor = 'pink';
}