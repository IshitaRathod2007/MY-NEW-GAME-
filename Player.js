class Player{
  constructor(x,y,width,height){
      this.width = width;
      this.height = height;
      var options = {
          isStatic : false

      }
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  }
}