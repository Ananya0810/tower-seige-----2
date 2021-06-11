class Sling{
constructor(a,b){

    var options={
        bodyA:a,
       pointB:b,
        length:1,
        stiffness:0.04
    }


    this.sling=Constraint.create(options)
   World.add(world,this.sling)
   this.pointB=b
}
attach(body){
    this.sling.bodyA=body
}
display(){
 if(this.sling.bodyA){
        strokeWeight(3)
        stroke("ash")
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,
            this.sling.pointB.x,this.sling.pointB.y)
        }
    }
        fly(){
            this.sling.bodyA=null
        }

        attach(body){
            this.sling.bodyA=body
        }
    }
