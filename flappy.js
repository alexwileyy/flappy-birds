var bird;
var pipes = [];

function setup(){
  createCanvas(800, 600);
  bird = new Bird();
  pipes.push(new Pipe())
  this.score = 0;
  this.gameEnd = false;
}

function draw(){
  background(0);
  bird.show();
  bird.update();
  if((frameCount % 50 == 0) && this.gameEnd != true){
    pipes.push(new Pipe())
  }
  //score
  console.log(this.score)
  textSize(20);
  textAlign(RIGHT)
  fill(255)
  text("Score: " + this.score, width - 110, 20, 100, 50)


  for(var i = pipes.length - 1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)){
      // for(var i = 0; i < pipes.length; i++){
      //   pipes.splice(i, 1)
      // }
      this.gameEnd = true;
    }

    if(pipes[i].pass(bird)){
      this.score += 1;
    }

    if(pipes[i].offscreen()){
      pipes.splice(i, 1);
    }

  }

  if(this.gameEnd){
    textSize(32);
    textAlign(CENTER)
    fill(255)
    text("Game Over!", 0, height/2-25, width, 50)
  }
}

function keyPressed(){
  if(key == ' '){
    bird.up()
  }
}
