class Player1 extends Component {
	constructor(width, height, color, x, y, type){
		super(width, height, color, x, y, type);
		this.newPos = function() 
		{
			moveThing(this);			
			this.x += this.speedX;
			this.y += this.speedY;
			boundaryCheck(this);
			collisionDetect(this);
			
		}
	}
}