

class LineAgent{

  constructor(x, y, theta, speed, strokeWeight){

    this.position = createVector(x, y)
    this.direction = createVector(Math.cos(theta), Math.sin(theta));
    this.knotPosition = round(random(170,200))
    this.strokeWeight = strokeWeight

    this.theta=theta
    this.speed = speed;

    this.fruitColor = color(0, 255, 0)
    //this.fruitColor.setAlpha(0.8);
    this.splitAngle = PI/6;

  }

  render(){

      push()

      translate(this.position.x, this.position.y)
      strokeWeight(this.strokeWeight)
      point(0,0)

      pop()


  }

  move(){

    this.direction.x=this.direction.x+this.direction.x*(noise(this.direction.x)*100)


    this.direction.y=this.direction.y+this.direction.y*(noise(this.direction.y)*100)

    this.position.add(this.direction.normalize().mult(this.speed))

  }

  splitA(){
      this.speed = this.speed * 0.6
    //  this.direction.rotate(1);
      let lineA = new LineAgent(this.position.x, this.position.y, this.theta + this.splitAngle, this.speed, this.strokeWeight*0.6)
      agents.push(lineA)

      let lineB = new LineAgent(this.position.x, this.position.y, this.theta - this.splitAngle, this.speed, this.strokeWeight*0.6)
      agents.push(lineB)

      this.speed = this.speed*1
  }

  fruit(){

    push()
    translate(this.position.x, this.position.y)

    stroke(this.fruitColor)
    fill(this.fruitColor)
    circle(0,0,3)

    pop()
  }



}
