var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = window.innerWidth;
var height = window.innerHeight;

//ball property
var ball_radius_min = 8;
var ball_radius_max = 40;
var ball_radius = ball_radius_max;

//start drawing off screen
var x = 0 - ball_radius;
var y = 0 - ball_radius;
var ball_x = x;
var ball_y = y;

//speed measures
var last_mouse_x = -1;
var last_mouse_y = -1;
var time = 200;
var speed = 0;
var x_dist = 0;
var y_dist = 0;

//initial call to get window size
resize();

//track cursor coordinates regularly to measure speed of movement
var tracker = setInterval(function(){
  last_mouse_x = x;
  last_mouse_y = y;
}, time);

function drawBall() {
  ctx.beginPath();
  // ball position changes to mouse position in increments for smoothness of animation
  ball_x += (x - ball_x)*0.1;
  ball_y += (y - ball_y)*0.1;
  ctx.arc(ball_x, ball_y, ball_radius, 0, 2*Math.PI);
  ctx.fillStyle = '#000000';
  ctx.fill();
}

//animation loop
function animate() {
  ctx.clearRect(0, 0, width, height);
  drawBall();
  requestAnimationFrame(animate);
}

animate();

function mousemove(e) {
  x = e.pageX;
  y = e.pageY;
  
  //if prev cursor move recorded
  if (last_mouse_x > -1) {
    
    //calculate speed
    x_dist = last_mouse_x - x;
    y_dist = last_mouse_y - y;                  
    speed = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/time;
    
    //decrease speed to min size on fast movement
    if (speed > 0.4) {
      if (ball_radius > ball_radius_min)
        ball_radius -= 1;
    } //decrease speed to max size on slow movement
    else { 
      if (ball_radius < ball_radius_max) {
        ball_radius += 1;
      }
    }

    animate();
  }
        
}

//get size of window to match with animation canvas
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

window.addEventListener('resize', resize);
window.addEventListener('mousemove', mousemove);