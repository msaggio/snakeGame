class Snake{
  constructor (){
    this.position_ = 0;
    this.direction_=0;
  }
  move(squares){
    if (this.direction_== 0)
      this.position_=this.position_ + squares;
    else this.position_=this.position_ -squares;
   
  }
  turn(){
    if (this.direction_==0)
     this.direction_=1;
    else this.direction_=0;
  }

  get position(){
    return this.position_;
  }

  turnLeft(){
    if (this.direction_==0)
      this.direction_=1;
    else this.direction_=0;

  }

  turnRight(){
    if (this.direction_==1)
     this.direction_=0;
    else this.direction=1;
  }
}

class Point{
  constructor(){
    this.x_=20;
    this.y_=20;
  }

  get position(){
    return this.position_;
  }
}

let mainSnake = new Snake("main");
mainSnake.move(10)
console.log(mainSnake.position)
mainSnake.turn()
mainSnake.move(20)
console.log(mainSnake.position)
mainSnake.turnLeft(20)
console.log(mainSnake.position)



