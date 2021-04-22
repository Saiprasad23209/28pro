class Mango {
    constructor(x,y,r) {
        var options = {
            isStatic: true,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("Plucking mangoes/mango.png")
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
        }
Display(){
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
}
}