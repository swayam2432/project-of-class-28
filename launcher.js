class SlingShot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 2,
            stiffness: 0.003
        }

        this.pointB = point2;
        this.sling = Constraint.create(options);

        World.add(world, this.sling);
    }

    attach(body) {
        this.sling.bodyA = body;
    }

    fly() {
        this.sling.bodyA = null;
    }

    display() {
        if (this.sling.bodyA) {
            push()
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop();
        }

    }
}