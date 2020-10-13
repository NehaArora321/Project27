class Bob{
    constructor(x,y,radius){
        var ball_options={
            restitution:1,
            density:0.8,
            isStatic:false,
            friction:0
        }
        this.body=Bodies.circle(x,y,radius,ball_options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("magenta");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}