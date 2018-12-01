// check for obstacles
function collisionDetect(e)
{
	for(i=0;i<walls.length;i++)
	{
    // collision conditions
    let touching = false;
		if(e.right > walls[i].left && 
			e.left < walls[i].left &&
			e.top < walls[i].bottom  &&
			(walls[i].left - e.left) > (e.width -6) && 		
			e.bottom > walls[i].top) {
        e.x = walls[i].left - e.width;
        touching = true;
      }
		if(e.left < walls[i].right &&
			e.right > walls[i].right &&
			e.top < walls[i].bottom &&
			(e.right - walls[i].right) > (e.width -6) &&
			e.bottom > walls[i].top) {
        e.x = walls[i].right;
        touching = true;
      }
		if(e.bottom > walls[i].top &&
			e.top < walls[i].top &&
			e.right > walls[i].left &&
			e.left < walls[i].right) {
        e.y = walls[i].top - e.height;
        touching = true;
      }
		if(e.top < walls[i].bottom &&
			e.bottom > walls[i].top &&
			e.right > walls[i].left &&
			e.left < walls[i].right) {
        e.y = walls[i].bottom;
        touching = true;
      }
    if(touching){
			if(walls[i].color == 'red' && canvas.keys && canvas.keys[65]
				&& gamePiece.inventory.keys.includes(key1)){ //.includes(this.door(key)) 
        walls[i]=false; 
      }
    }
	}	
}

// check for canvas edges
boundaryCheck = function(e)
{
	let canvasBottom = canvas.height - e.height;
	let canvasTop = 0;
	let canvasRight = canvas.width - e.width;
	let canvasLeft = 0;
	if (e.y > canvasBottom) {e.y = canvasBottom;}	
	if (e.y < canvasTop)    {e.y = canvasTop;}	
	if (e.x > canvasRight)  {e.x = canvasRight;}	
	if (e.x < canvasLeft)   {e.x = canvasLeft;}
}