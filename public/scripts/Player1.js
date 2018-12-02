class Player1 extends Component 
{
	constructor(width, height, color, x, y, type)
	{
		super(width, height, color, x, y, type);
		this.inventory = 
		{
			'keys':[]
		}
		this.newPos = function() 
		{
			moveThing(this);			
			this.x += this.speedX;
			this.y += this.speedY;
			boundaryCheck(this);
			doorOpen(this);
			collisionDetect(this);
			itemPickUp(this);
			
		}
	}
}

