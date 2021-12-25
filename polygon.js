class Polygon{
    constructor(x,y,r){
        var options = {
            restitution: 1,
            friction: 1.3,
            density: 1
        }

        this.body = Bodies.circle(50,200,20, options)
        this.image = loadImage("polygon.png")
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body)

    }

    display(){

        var pos=this.body.position;		
		push();
		translate(pos.x, pos.y);
        imageMode(CENTER)
        ellipseMode(RADIUS);
        image(this.image, this.x, this.y, this.r*2, this.r*2)
        pop();
        
    }
}