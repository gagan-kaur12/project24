class Ball{
    constructor(x,y,r){
        var options = {
        'isStatic':false,
        'restitution': 0.8,
         'density':1.0,
         'friction':1.0
        }
        
        this.r = 10;
       
        this.body= Bodies.circle(x,y,10,options)
        World.add(world,this.body);
            }
     display(){
      var pos = this.body.position;
              //  push()
     fill("blue");       // translate(pos.x,pos.y)
     ellipseMode(RADIUS);
    
    ellipse(pos.x,pos.y,this.r,this.r);
               // pop();
   } 
}