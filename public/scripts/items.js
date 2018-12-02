class Items extends Component 
{
	constructor(width, height, src, x, y, itemType, itemName)
	{
    super(width, height, x, y);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.itemType = itemType;
    this.itemName = itemName;
    this.src = src;
    this.draw = function(){
      ctx.drawImage(src, x, y);
    }	
  }
  // get top() { return this.y}   
	// get bottom() {return this.y + this.height}
	// get left() {return this.x}
	// get right() {return this.x + this.width}
	// get center() {return [this.x + this.width/2, this.y + this.width/2]}
}



// update the items
function updateItems(){

  items.forEach(function(item)
  {
		if(item){
      item.draw()}
  })
}