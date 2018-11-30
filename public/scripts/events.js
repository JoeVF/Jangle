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
	if (canvas.keys && canvas.keys[66]) {turnScreenPink()}
}

