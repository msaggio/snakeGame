class Snake{
  constructor (){
    this.position_ = new Point(0,0);
    this.direction_=0;
  }

  move(squares){
    if (this.direction_== 0)
      this.position_= new Point (this.position_.x,this.position_.y + squares);
    else if(this.direction_ == 1)
      this.position_ = new Point (this.position_.x + squares,this.position_.y);
    else if(this.direction_== 2)
      this.position_ = new Point (this.position_.x,this.position_.y - squares);
    else if(this.direction_ == 3)
      this.position_ = new Point (this.position_.x - squares,this.position_.y);
  }

  get position(){
    return this.position_;
  }

  turnLeft(){
    if (this.direction_==0)
      this.direction_=3;
    else if (this.direction_==1)
      this.direction_=0;
    else if (this.direction_==2)
      this.direction_=1;
    else if (this.direction_==3)
      this.direction_=2;
  }

  turnRight(){
    if (this.direction_==0)
     this.direction_=1;
    else if (this.direction_==1)
      this.direction_=2;
    else if (this.direction_==2)
      this.direction_=3;
    else if (this.direction_==3)
      this.direction_=0;
    
  }
}

class Point{
  constructor(x,y){
    this.x_=x;
    this.y_=y;
  }
  get x(){
    return this.x_;
  }
  get y(){
    return this.y_;
  }
}


class WorldModel{
  constructor(snake){
    this.snake_ = snake;  
  }
  update(steps){
    this.snake.move(steps)
  }
 get snake(){
   return this.snake_;
 }
}



class SnakeController{
  constructor(world,snake){
    this.world_=snakeWorld_;
    this.snake_=slitherer_;
  }

  turnSnakeLeft(turnLeft){
    
  }
}

let mainSnake = new Snake;
let newWorld = new WorldModel(mainSnake);
newWorld.update(5);
console.log(mainSnake.position);
mainSnake.turnRight();
newWorld.update(10);
console.log(mainSnake.position);

