// check if player1 is touching an item
function itemPickUp(e)
{
	for(i=0;i<items.length;i++)
	{
    // collision conditions
		let touching = false;
		if(e.right > items[i].left && 
			e.left < items[i].left &&
			e.top < items[i].bottom  &&
			(items[i].left - e.left) > (e.width -6) && 		
			e.bottom > items[i].top) {
        e.x = items[i].left - e.width;
        touching = true;
      }
		if(e.left < items[i].right &&
			e.right > items[i].right &&
			e.top < items[i].bottom &&
			(e.right - items[i].right) > (e.width -6) &&
			e.bottom > items[i].top) {
        e.x = items[i].right;
        touching = true;
      }
		if(e.bottom > items[i].top &&
			e.top < items[i].top &&
			e.right > items[i].left &&
			e.left < items[i].right) {
        e.y = items[i].top - e.height;
        touching = true;
      }
		if(e.top < items[i].bottom &&
			e.bottom > items[i].top &&
			e.right > items[i].left &&
			e.left < items[i].right) {
        e.y = items[i].bottom;
        touching = true;
      }
    if(touching){
      if(canvas.keys && canvas.keys[65]){
				e.inventory.keys.push(items[i]);
				let hit = new Audio('sound/hit.ogg');
				hit.play();
        items[i]=false; 
      }
    }
	}
	
}