  var canvas = document.getElementById('example');
  /*Set canvas to be full screen*/
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;
  canvasW = canvas.width;
  canvasH = canvas.height; 
  var time = 200;
  var mousex = -1;
  var lastmousex=-1;
  var mousey = -1;
  var lastmousey=-1;     
  
  if (canvas.getContext) {    
  
    var ctx = canvas.getContext('2d');
    
    
    var ball = {
      x: -100,
      y: -100,
      radius: 8,
      color: 'black',
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    function clear() {
      //ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }

    function draw() {
      clear();
      ball.draw();

      raf = window.requestAnimationFrame(draw);
    }  
    
  
    var tracker = setInterval(function(){
        lastmousex = mousex;
        lastmousey = mousey;
    }, time);

    canvas.addEventListener('mousemove', function(e) {
        clear();
        mousex = e.pageX;
        mousey = e.pageY;
        ball.x = e.pageX;
        ball.y = e.pageY;
        //ball.x = (mousex - lastmousex )*0.1;
        //ball.y = (mousey - lastmousey )*0.1;
        
        if (lastmousex > -1) {
          
          var x_dist = lastmousex - mousex,
              y_dist = lastmousey - mousey;                  
          var velocity = Math.sqrt(x_dist*x_dist+y_dist*y_dist)/time;
          if ((velocity *20) < 8) {
            ball.radius = 8;
          } else {
          ball.radius = velocity * 20;
          }
          ball.draw()
          clear();
          console.log('Speed: ' + velocity);
        }
   
    });
    
    ball.draw();
  
  } //end if canvas.getContext 
   