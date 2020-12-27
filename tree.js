class Tree{
    constructor(x,y,width,height){
        var options ={
            isStatic : true,
            density:0
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pictures1/tree.png")
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
     //   rect(this.body.position.x,this.body.position.y, this.width, this.height);
        image(this.image, this.body.position.x, this.body.position.y, this.width*100,this.height*100);
    }
}