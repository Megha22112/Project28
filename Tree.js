class Tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x = x;
      this.y = y;
      this.thikness = 10;
      this.width = 450;
      this.height = 600;

      this.image=loadImage("images/tree.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})

      World.add(world, this.bottomBody)
      World.add(world,this.leftWallBody)
      World.add(world, this.rightWallBody);
    }
    display(){
      var pos =this.bottomBody.position;
      push()
      translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
      
    }
  };