class Box{

    constructor(x,y,w,h) {
        var options = {
          friction:0,
          restitution:0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.width = w
        this.height = h
        World.add(world, this.body);
      }
      display()
      {
        console.log(this.body.speed)
      
      
      
      if(this.body.speed<2.5){
     
      push()
      fill(this.color)
      translate (this.body.position.x,this.body.position.y)
      rotate ( this.body.angle)
      rectMode(CENTER);
      rect(0,0,30.40);
      pop ()
 
      
      }
      else{
        World.remove(world,this.body)
       
      }
      }

    }

