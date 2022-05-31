

let stars = []

let starNumber = 5


const height = window.innerHeight
const width = window.innerWidth

function setup() {
  createCanvas(width, height, WEBGL);

  for (let i = 0; i< starNumber; i++){
    star = new Star();

    stars.push(star)

  }



}



function draw() {
//  clear()



  // background(0, 0, 0);

  // line(0,0,0, height, 0, 0)
  // line(0,0,0, 0, height, 0)
  // line(0,0,0, 0, 0, height)


   fill(0, 126, 255, 30);


   //sphere(400)

  for(let y=0; y<stars.length; y++){

    stars[y].update(stars)
    stars[y].show()

  }

  orbitControl();


}
