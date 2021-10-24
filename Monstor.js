class Monstor {
    constructor(x,y){
        var options ={
            frictionAir:0.1,
            density:0.01

        }
        this.body = Bodies.rectangle(x,y,50,50,options);
    World.add(world,this.body);
    this.image=loadImage("assets/shooter_1.png");
    }
    display(){
        var pos=this.body.position;
        push();
        translate (pos.x,pos.y);
        rotate(this.body.angle)
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }

}