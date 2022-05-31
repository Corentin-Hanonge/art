let accConst = 0.00001

class Star{

  constructor(){


//  let x = Math.random() * (width-1) + 1
//	let y = Math.random() * (height-1) + 1
//	this.pos = createVector(x, y)

  //this.velocity = createVector(0,0,0)
  this.acceleration = createVector(0.00000001, 1, 0.0000001)

  this.rho= random()*PI*2;

  this.theta= random()*PI*2;


  this.rhoVel = 0;
  this.thetaVel = 0;

  this.rhoAccel = 0;
  this.thetaAccel = 0;

  this.r=250;


  this.xx = this.r*sin(this.theta)*sin(this.rho)

  this.zz = this.r*sin(this.theta)*cos(this.rho)

  this.yy = -this.r*cos(this.theta)

  this.posXYZ = createVector(this.xx , this.yy, this.zz)

  console.table(this.posXYZ)

  }

  show(){



    stroke(255, 255, 255)

    push() // starting a new drawing state

    translate(this.posXYZ.x, this.posXYZ.y, this.posXYZ.z)
     // displacing the cursor by pos.x and pos.y
    sphere(1)


  //  line(0,0,0, this.acceleration.x, this.acceleration.y, this.acceleration.z)
    pop() // restoring the previous drawing state

  }

  move(){






  //  console.log( atan(this.acceleration.x/this.acceleration.z))

  if(this.posXYZ.z>0){
    this.rhoAccel =  atan(this.acceleration.x/this.acceleration.z)
  }

    if (this.posXYZ.z<0&&this.posXYZ.x>=0) {

      this.rhoAccel = PI + atan(this.acceleration.x/this.acceleration.z)

    }

    if (this.posXYZ.z<0&&this.posXYZ.x<0) {
      this.rhoAccel = -PI + atan(this.acceleration.x/this.acceleration.z)
    }

    if (this.posXYZ.z==0&&this.posXYZ.x>0) {
      this.rhoAccel = PI/2;
    }
    if (this.posXYZ.z==0&&this.posXYZ.x<0) {
      this.rhoAccel = -PI/2;
    }


    this.thetaAccel = acos(this.acceleration.x/this.r)

    console.table(this.acceleration)
    console.table(this.posXYZ)


    this.thetaVel += this.thetaAccel*accConst

    this.rhoVel += this.rhoAccel*accConst

  //  this.posXYZ.add(this.velocity)


    this.theta += (this.thetaVel)

    console.log(this.rho)


    this.rho += (this.rhoVel)


  //  this.acceleration.mult(0)





  }

  gravitate(stars){

    for(let i=0; i<stars.length; i++){

  //    let d = dist(this.posXYZ.x,this.posXYZ.y,this.posXYZ.z, stars[i].posXYZ.x, stars[i].posXYZ.y, stars[i].posXYZ.z )

      //create vector pointing at neighbor
  //    let diff = p5.Vector.sub(this.posXYZ, stars[i].posXYZ).mult(-1);


    //  let diff = createVector(0,1,0)


//      diff.normalize();


  //    diff.div(pow(d, 3)); // Weight by distance
  //    this.acceleration.add(diff)


    }

  }

  update(stars){


    this.gravitate(stars)
    //
     this.move()
    //
     this.calculate3DCoords()

  }


  calculate3DCoords(){


    this.xx = this.r*sin(this.theta)*sin(this.rho)

    this.zz = this.r*sin(this.theta)*cos(this.rho)

    this.yy = -this.r*cos(this.theta)


    this.posXYZ.x = this.xx;
    this.posXYZ.y = this.yy;
    this.posXYZ.z = this.zz;

    console.log(this.rho)

  }



}
