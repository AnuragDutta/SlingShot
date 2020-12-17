class Pig{
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 40,40, options);
    this.width = 40;
    this.height = 40;
    this.image = loadImage("sprites/mango.png");
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
    }
/*/display(){
    if(this.body.speed<3){
      super.display()
    }
    else{
      World.remove(world,this.body)
      push()
      this.visiblity = this.visiblity-7
      tint(255, this.visiblity)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      pop()
    }
  }*/
  