class Blower {
  constructor(x, y, w, h) {
    let options = {
      isStatic: true,
      x:2
    };

    this.body = Bodies.rectangle(250,500 , 1,1, options);
    this.w = w;
    this.h = h;
    this.color = color;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill("#8d6e63");
    rect(0, 0, this.w, this.h);
    pop();
  }
}
