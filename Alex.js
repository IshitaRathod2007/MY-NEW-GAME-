class Alex {
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
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,50,50);
        pop();
    }
    moveUp(){
        var pos=this.body.position;
        pos.y = pos.y-7;
    }
    moveDown(){
        var pos=this.body.position;
        pos.y = pos.y+7;
    }
    moveRight(){
        var pos=this.body.position;
        pos.x = pos.x+7;
    }
    moveLeft(){
        var pos=this.body.position;
        pos.x = pos.x-7;
    }

}