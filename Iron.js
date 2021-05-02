class Iron{

constructor(x,y,angle){

var options={

restitution:0.8,
friction:3,
density:30,

}

this.body=Bodies.rectangle(x,y,150,75,options)
Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)
}

display(){

var pos=this.body.position
var angle= this.body.angle
push()
translate(pos.x,pos.y)
rotate(angle)
stroke('blue')
strokeWeight(10)
fill('green')
rectMode(CENTER)
rect(0,0,150,75)
pop()
}



}