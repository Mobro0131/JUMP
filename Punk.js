// class Punk extends BaseClass{
//   constructor(x, y, width, height){
//     super(x,y,width,height)
//     this.image = loadImage("Images/punk.png")
//   }
// }
class Punk{
  constructor(x, y, width, height) {
      var options = {
          'friction':1.0
         
      }

      this.image = loadImage("Images/punk.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
         push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}