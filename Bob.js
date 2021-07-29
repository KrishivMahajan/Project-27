class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':1,
            'friction':0,
            'density':0.7
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse(0, 0,this.r,this.r);
        pop();
      }
}