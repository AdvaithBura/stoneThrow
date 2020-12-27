class Stone {
    constructor(x,y,width,height){
        var options ={
            restitution :0,
            friction:0,
            density :1.2,
            height : height
        }
        this.body = Bodies.circle(x,y,width, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pictures1/stone.png");
        World.add(world,this.body);
    }
    display(){
        image(this.image,this.body.position.x, this.body.position.y, this.width, this.height);
    }
}