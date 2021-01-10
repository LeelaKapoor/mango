class tree{
    constructor(x,y){
        this.x=x
        this.y=y
        this.width=450
        this.height=600 
        this.wallThickness=10
        this.image=loadImage("tree.png")
        this.body=Bodies.rectangle(this.x,this.y, this.width, this.wallThickness,{isStatic:true})
        World.add(world,this.body)

        }
        display(){
            var pose= this.body.position
            push()
            translate(pose.x, pose.y+10)
            fill ("white")
            imageMode(CENTER)
            image (this.image, 0,-this.height/2, this.width, this.height)
            pop()
        }
    }
