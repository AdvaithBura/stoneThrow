class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            height:height,
            restitution :0,
            friction :1
        }
        this.body = Bodies.circle(x,y,width,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("pictures1/mango.png");
    }
    display(){
        image(this.image,this.body.position.x,this.body.position.y, this.width*10,this.height*10);
     // ellipse(this.body.position.x,this.body.position.y,this.radius);
    }
}