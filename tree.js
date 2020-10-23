class Tree{
  constructor(x, y) {
      var options = {
          isStatic: true,
          'restitution':0,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20,20, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 450,600);
      pop();
    }
  }