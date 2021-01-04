
class Paper{
    
    constructor(x,y,radius){
     
        var options ={
            isStatic : false,
            restitution:0.3,
            friction:0.8,
            density:1.2
            
           
        }
       this.image = loadImage("paper.png");
        this.body = Bodies.circle(x,y,(radius-20)/2,options);
    //    this.width = width;
    //    this.height = height;
        this.radius = 70;
        World.add(world,this.body)
    }

    display(){
         var pos = this.body.position;
      //   var angle = this.paperBody.angle;
         push();
         translate(pos.x,pos.y);
       //  rotate(angle);
      //   ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("green");
        fill("255");
        //ellipse(0,0,this.radius);
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius);
        pop();
       
    }
};