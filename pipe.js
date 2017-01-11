function Pipe(){

  this.top = random(height/2, 50);
  this.space = random(100, 200);
  this.bottom = height - this.top - this.space;
  this.x = width;
  this.width = 20;
  this.speed = 5;


  this.show = function(){
    fill(255);
    if(this.highlight){
      console.log('colour')
      fill(255,0,0)
    }
    rect(this.x, 0, this.width, this.top);
    rect(this.x, this.top + this.space, this.width, this.bottom);


    this.hits = function(bird){
      if((bird.y < this.top || bird.y > (this.top + this.space)) && (bird.x >= this.x && bird.x <= this.x + this.width)){
        this.highlight = true;
        return true;
      }
      else{
        this.highlight = false;
        return false;
      }
    }

    this.pass = function(){
      if((bird.y >= this.top && bird.y < this.top + this.space) && (bird.x >= this.x && bird.x <= this.x + 1)){
        return true;
      }
      else{
        return false;
      }
    }

    this.offscreen = function(){
      if(this.x < 0){
        return true;
      }
      else{
        return false;
      }
    }

    this.update = function(){
      this.x -= this.speed;
    }
  }
}
