class Stone{

constructor(x,y,angle){

var options={

restitution:0.8,
friction:0.9,
density:12,
}

this.body=Bodies.rectangle(x,y,70,100,options)

Matter.Body.setAngle(this.body,angle)
World.add(world,this.body)


}

display(){

var pos=this.body.position
var angle= this.body.angle

push()
translate(pos.x,pos.y)
rotate(angle)
stroke('black')
strokeWeight(4)
fill('red')
rectMode(CENTER)
rect(0,0,70,100)
pop()


}



}