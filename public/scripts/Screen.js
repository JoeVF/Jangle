// UPDATING THE SCREEN
function updateAll() {
	drawAll();
	moveAll();
}

function moveAll() {
	gamePiece.newPos();	
}

function drawAll() {
	clearScreen();
	makeFloor(stoneFloor3);
	if(display){display.draw()};
	updateWalls();
	updateItems();	
	updateDoors();	
	gamePiece.draw();
	

}

// clear the screen
function clearScreen(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// sample function tied to 'b' key
function turnScreenPink(){
	console.log('Sample event fired.');
	makeLevelTwo();
}

function drawRect(x, y, width, height, color){
ctx.fillStyle = 'color';
ctx.fillRect(x, y, width, height);
ctx.fill();
}