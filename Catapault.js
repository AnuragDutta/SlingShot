class Catapault{
    constructor(body1,point2){
        var options = {
            bodyA : body1,
            pointB : point2,
            length : 10,
            stiffness : 0.01
        } 
        this.pointB = point2
        this.sling = Matter.Constraint.create(options)
        World.add(world,this.sling)
    }

    display(){
        if (this.sling.bodyA){
            var pointA = this.sling.bodyA.position
            var pointB = this.pointB
            push()
            stroke(48,22,8)
            pop()
        }
        
    }


    fly(){
        this.sling.bodyA= null

    }


    attach (body){
        this.sling.bodyA= body
    }
}