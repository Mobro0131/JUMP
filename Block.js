class Block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction:1.0
          
      }
      this.image = loadImage("Images/block2.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("black");
      push()
      imageMode(CENTER)
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop()
    }
  };
