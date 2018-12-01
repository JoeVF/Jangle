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
	gamePiece.draw();
	display.text = `The Amazing Game`;
	updateWalls();
	updateitems();
	display.draw();
	// key1.draw();
	drawRect(canvas.width/2, canvas.height/2, canvas.width/12, canvas.height/12, 'white');
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

function drawRect(x, y, width, height, color){
ctx.fillStyle = 'color';
ctx.fillRect(x, y, width, height);
ctx.fill();
}