// COMPONENT CONSTRUCTOR
class Component {

	constructor (width, height, color, x, y, type){
		this.width = width;
		this.height = height;
		this. color = color;
		this.x = x;
		this.y = y;
		this.type = type;
		this.speedX = 0;
		this.speedY = 0;
		this.update = function(){
			// Chooses what type, and Draws it
			if (this.type == "text") 
			{
				ctx.font = this.width + " " + this.height;
				ctx.fillStyle = color;
				ctx.fillText(this.text, this.x, this.y);
			} 
			else if(this.type == 'circle') 
			{
				let radius = this.width;
				ctx.beginPath();				
				ctx.arc(this.x, this.y, radius, 0, 2*Math.PI,false);
				ctx.fillStyle = color;
				ctx.fill();
			} 
			else 
			{
				ctx.fillStyle = color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
			}
		}	
		// Updating the object's position
		this.newPos = function() {
			this.x += this.speedX;
			this.y += this.speedY;
			boundaryCheck(this);			
		}		
	}

	// remember cicles don't have top,bottom,sides
	get top() { return this.y}   
	get bottom() {return this.y + this.height}
	get left() {return this.x}
	get right() {return this.x + this.width}
	get center() {return [this.x + this.width/2, this.y + this.width/2]}
}