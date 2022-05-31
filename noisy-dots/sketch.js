
let x = 0;
let iterations = 200;
let gap = 20;

let width = window.innerWidth;
let height = window.innerHeight;

let z = 0;

function setup() {
  createCanvas(width, height);

}



function draw() {


  for (let i = 0; i<iterations; i = i + gap ){
    for (let j = 0; j<iterations; j = j+ gap){

      let noiseConst = noise(i,j,z)

      let x = i+50*(noise(j,i,z)-0.5)
      let y = j+50* (noise(z,i,j)-0.5)
      circle(x , y, 20)

      if (noiseConst<0.5){
        fill("#ADD8E6")
      }
      else{
        fill("#006")
      }


  }
}

z = z+0.05;

//  point(x, height/2+20*sin(x))

//  x++;

}
