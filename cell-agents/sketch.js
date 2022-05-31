

let cells = []
let nCircles = 2400

let height = window.innerHeight;
let width = window.innerWidth;

let iterations = 0;

function setup() {

  let loopProtection;
  createCanvas(width, height);
  background('#EBF7FF')

  while(cells.length < nCircles){


    let cell = new Cell( random(0, width), noise(height, iterations)*height, random(0,height) )

    let overlapping = false;

  //FOR EACH CELL IN THE TABLE, CHECK IT AGAINST ALL OTHER CELLS
      for (let k=0; k<cells.length; k++){

        let d = dist(cell.position.x, cell.position.y, cells[k].position.x, cells[k].position.y)

        if (d*2 < cell.radius + cells[k].radius){
          overlapping = !overlapping;
          break
        }
      }

        if(!overlapping){
            cells.push(cell)
        }

        iterations++;

      }

      cells.forEach((cell) => {
        cell.render()
      });
  }



//LETS GO THROUGH THE CELLS TABLE

function draw() {



}
