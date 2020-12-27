class Line {
    constructor(bodyA,pointB){
        var options ={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.01,
            length : 0.0000001
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }

    boom(){
        this.chain.bodyA = null;
    }
    display(){
        stroke("red");
        if(this.chain.bodyA){
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
    }
}

    attach(bodyA){
       // this.chain.bodyA != null;
      this.chain.bodyA = bodyA;
        line(this.chain1.bodyA.position.x, this.chain1.bodyA.position.y, this.chain1.pointB.x, this.chain1.pointB.y);
    }
}