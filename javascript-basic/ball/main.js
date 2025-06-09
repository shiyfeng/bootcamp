// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}

function randomColor(){
  return(
    "rgb(" +
    random(0, 255) +
    "," +
    random(0, 255) +
    "," +
    random(0, 255) +
    ")"
  );
}

function Shape(x, y, velX, velY, exists) {
  this.x=x;
  this.y=y;
  this.velX=velX;
  this.velY=velY;
  this.exists=exists;
}

function Ball(x, y, velX, velY, color, size, exists){
  Shape.call(this, x, y, velX, velY, exists);
  this.color = color;
  this.size=size;
}

Ball.prototype = Object.create(Shape.prototype);//Ball继承Shape
Ball.prototype.constructor = Ball;

function EvilCircle (x, y, exists) {
  Shape.call(this, x, y, 20, 20, exists);
  this.color = "white";
  this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle=this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
}

EvilCircle.prototype.draw = function () {
  ctx.beginPath();
  ctx.lineWidth = 3;
  ctx.strokeStyle=this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.stroke();
}

Ball.prototype.update = function () {
  if (this.x + this.size >= width) {
    this.velX = -this.velX;
  }

  if (this.x - this.size <= 0) {
    this.velX = -this.velX;
  }

  if (this.y + this.size >= height) {
    this.velY = -this.velY;
  }

  if(this.y - this.size <= 0) {
    this.velY = -this.velY;
  }
   
  this.x += this.velX;
  this.y += this.velY;
};

EvilCircle.prototype.checkBounds = function () {
  if (this.x + this.size >= width) {
    this.x -= this.size;
  }

  if (this.x - this.size <= 0) {
    this.x += this.size;
  }

  if (this.y + this.size >= height) {
    this.y -= this.size;
  }

  if(this.y - this.size <= 0) {
    this.y += this.size;
  }
  
};

EvilCircle.prototype.setControls = function () {
  window.onkeydown = (e) => {
    switch (e.key) {
      case "a":
        this.x -= this.velX;
        break;
      case "d":
        this.x += this.velX;
        break;
      case "w":
        this.y -= this.velY;
        break;
      case "s":
        this.y += this.velY;
        break;
    }
  }
};

EvilCircle.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if(balls[j].exists) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy *dy);

      if(distance < this.size + balls[j].size) {
        balls[j].exists = false;
      }
    }
  }
};

Ball.prototype.collisionDetect = function () {
  for (let j = 0; j < balls.length; j++) {
    if(this !== balls[j]) {
      const dx = this.x - balls[j].x;
      const dy = this.y - balls[j].y;
      const distance = Math.sqrt(dx * dx + dy *dy);

      if(distance < this.size + balls[j].size) {
        balls[j].color = this.color = randomColor();
      }
    }
  }
};

let balls = [];

while (balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomColor(),
    size,
    true
  );
  balls.push(ball);
}

let Evil = new EvilCircle(random(0, width), random(0, height), true);
Evil.setControls();

function loop() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < balls.length; i++) {
    if(balls[i].exists){
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  }

  Evil.draw();
  Evil.checkBounds();
  Evil.collisionDetect();

  requestAnimationFrame(loop);
}

loop();

