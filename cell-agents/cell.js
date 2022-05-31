
let childOptionArray = [1, 2, 3]

class Cell{

  constructor(x, y, r){

    this.position = createVector(x, y)
    this.radius = r ;
    this.nDots = random(childOptionArray)


  }

  render(){

  //  if( this.radius>2){



      push()

      translate(this.position.x, this.position.y)


      if(this.radius <= 100){

        stroke('#B8E1FF')
        fill('#EBFFFD')



      }

      else if(this.radius>600){

        stroke('#E8AEB7')
        fill('#FBEFF1')


      }

      else if(this.radius>100&&this.radius<=600){

        stroke('#82ABA1')
        fill('#EBFEEF')


      }

      circle(0,0,this.radius)
      pop()

      push()
        translate(this.position.x, this.position.y)

        stroke('#B8E1FF')
        fill('#EBFFFD')

        if(this.radius<100){

          circle(0,0, this.radius/this.nDots)

        }
      pop()
  }
}
