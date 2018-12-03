// keys event listener-----------
window.addEventListener('keydown', function (e) {
	canvas.keys = (canvas.keys || []);
	canvas.keys[e.which] = true;	
})
window.addEventListener('keyup', function (e) {
	canvas.keys = (canvas.keys || []);
	canvas.keys[e.which] = false;
	count = 0;
})
let count = 0;
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
		e.frameY = 0;
		takeStep();
	}

	if(prevX > e.x){
		e.frameY = 18;
		takeStep();
	}

	if(prevY < e.y){
		e.frameY = 36;
		takeStep();
	}
	if(prevY > e.y){
		e.frameY = 54;
		takeStep();
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

	function takeStep(){
		if(e.frameX < 180){
			if(count%18==0){
				e.frameX += 18;
			}			
		} else{
			e.frameX = 0;
		} count += 6;	
	}
}

