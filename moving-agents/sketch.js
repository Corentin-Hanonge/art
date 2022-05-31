

let agents = [];
let nAgents = 5;
let counter = 0;
let duration = 2000;

function setup() {

  let theta = -PI/2;

  let beta = random(0, 2*PI)

  createCanvas(window.innerWidth, 1000);




    let agent = new LineAgent(500, 1100, theta, 3, 4)

    //+ noise(theta)*0.1;
    agents.push(agent)

    let agent1 = new LineAgent(100, 0, theta+PI, 3, 4)

    //+ noise(theta)*0.1;
    agents.push(agent1)


  // for (let j= 0; j<nAgents; j++){
  //   let agent = new LineAgent(200, 200, beta)
  //   beta = beta + PI/360
  //   agents.push(agent)
  // }

}



function draw() {

  if(counter<duration){

    counter = counter+1;

    agents.forEach((agent) => {

      if(counter%agent.knotPosition==0){
        agent.splitA()
      }

      if(counter%(agent.knotPosition+30)==0){
      //  agent.fruit()
      }


      agent.render()
      agent.move()

    });

  }




}
