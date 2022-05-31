let accConst = 0.000000001

class Star{

  constructor(){


//  let x = Math.random() * (width-1) + 1
//	let y = Math.random() * (height-1) + 1
//	this.pos = createVector(x, y)

  //this.velocity = createVector(0,0,0)
  this.acceleration = createVector(0, 0, 0)

  this.rho= random()*PI  ;
  this.theta= random()*PI ;


  this.rhoVel = 0.0;
  this.thetaVel = 0.0;

  this.rhoAccel = 0;
  this.thetaAccel = 0;

  this.r=400;
  

  this.xx = this.r*sin(this.theta)*sin(this.rho)

  this.zz = this.r*sin(this.theta)*cos(this.rho)

  this.yy = -this.r*cos(this.theta)

  this.posXYZ = createVector(this.xx , this.yy, this.zz)


  }

  show(){



    stroke(255, 255, 255)

    push() // starting a new drawing state

    translate(this.posXYZ.x, this.posXYZ.y, this.posXYZ.z)
     // displacing the cursor by pos.x and pos.y
    sphere(10)


  //  line(0,0,0, this.acceleration.x, this.acceleration.y, this.acceleration.z)
    pop() // restoring the previous drawing state

  }

  move(){

    this.rhoAccel =  atan(this.acceleration.x/this.acceleration.z)


    if (this.posXYZ.x<0&&this.posXYZ.y>=0) {

      this.rhoAccel += PI;

    }

    if (this.posXYZ.x<0&&this.posXYZ.y<0) {
      this.rhoAccel -= PI;
    }


    this.thetaAccel = acos(-this.acceleration.y/(sqrt(pow(this.acceleration.x, 2)+pow(this.acceleration.y, 2)+pow(this.acceleration.z, 2))))

    console.table(this.acceleration)
    console.table(this.posXYZ)


    this.thetaVel += this.thetaAccel*accConst

    this.rhoVel += this.rhoAccel*accConst

  //  this.posXYZ.add(this.velocity)


    this.theta += (this.thetaVel)*0.000001

    this.rho += (this.rhoVel)*0.000001

    this.acceleration.mult(0)





  }

  gravitate(stars){

    for(let i=0; i<stars.length; i++){

  //    let d = dist(this.posXYZ.x,this.posXYZ.y,this.posXYZ.z, stars[i].posXYZ.x, stars[i].posXYZ.y, stars[i].posXYZ.z )

      //create vector pointing at neighbor
  //    let diff = p5.Vector.sub(this.posXYZ, stars[i].posXYZ).mult(-1);


let diff = createVector(0,0.0001,0)


      diff.normalize();


  //    diff.div(pow(d, 3)); // Weight by distance
      this.acceleration.add(diff)


    }

  }

  update(stars){


    this.gravitate(stars)

    this.move()

    this.calculate3DCoords()

  }


  calculate3DCoords(){

    // this.rho = pow(this.posXYZ.xx, 2)+pow(this.posXYZ.yy, 2)+pow(this.posXYZ.zz, 2)
    //
    // this.theta = atan(this.posXYZ.yy/this.posXYZ.xx)
    //
    // this.rho = acos(this.posXYZ.zz/(sqrt(pow(this.posXYZ.xx, 2)+pow(this.posXYZ.yy, 2)+pow(this.posXYZ.zz, 2))))

      this.zz = -this.r*sin(this.theta)*cos(this.rho)

      this.xx = this.r*sin(this.theta)*sin(this.rho)

      this.yy = -this.r*cos(this.theta)


    this.posXYZ.x = this.zz;
    this.posXYZ.y = this.xx;
    this.posXYZ.z = this.yy

  }



}
