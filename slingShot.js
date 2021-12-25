class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);

    }
    fly(){
        this.slingShot.bodyA = null
    }

    attach(body){
        this.slingShot.bodyA = body;
    }

    display(){
        if(this.slingShot.bodyA){
        var PointA = this.slingShot.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(3);
        line(PointA.x, PointA.y, pointB.x, pointB.y);
        }
    }
}