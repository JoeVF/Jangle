// keys event listener-----------
window.addEventListener('keydown', function (e) {
	canvas.keys = (canvas.keys || []);
	canvas.keys[e.which] = true;	
})
window.addEventListener('keyup', function (e) {
	canvas.keys = (canvas.keys || []);
	canvas.keys[e.which] = false;		
})

// movement by controller
function moveThing(e) {
  gamePiece.speedX = 0; gamePiece.speedY = 0;
  let walkingSpeed = 2;
  if (canvas.keys && canvas.keys[37]) {e.speedX = -walkingSpeed;}
  if (canvas.keys && canvas.keys[39]) {e.speedX = walkingSpeed}
  if (canvas.keys && canvas.keys[38]) {e.speedY = -walkingSpeed}
	if (canvas.keys && canvas.keys[40]) {e.speedY = walkingSpeed}
	if (canvas.keys && canvas.keys[66]) {makeLevelTwo()}
	
	let prevX = e.x - e.speedX;
	let prevY = e.y - e.speedY;
	if(prevX < e.x){
		gamePiece.color = playerE;
	}
	if(prevX > e.x){
		gamePiece.color = playerW;
	}
	if(prevY < e.y){
		gamePiece.color = playerS;
	}
	if(prevY > e.y){
		gamePiece.color = playerN;
	}
	if(prevX < e.x && prevY < e.y){
		gamePiece.color = playerSE;
	}
	if(prevX < e.x && prevY > e.y){
		gamePiece.color = playerNE;
	}
	if(prevX > e.x && prevY < e.y){
		gamePiece.color = playerSW;
	}
	if(prevX > e.x && prevY > e.y){
		gamePiece.color = playerNW;
	}
}

