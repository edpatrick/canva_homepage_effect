    var html = document.getElementById('main'),
    time = 1000,
    cursor_x = -1,
    last_mouse_x = -1,
    cursor_y = -1,
    last_mouse_y = -1,
    velocity = 0,
    x_dist = 0,
    y_dist = 0;

    //record cursor positions at set intervals
    var tracker = setInterval(function() {
        last_mouse_x = cursor_x;
        last_mouse_y = cursor_y;
    }, time);

    html.addEventListener('mousemove', function(e) {
        cursor_x = e.pageX;
        cursor_y = e.pageY;

        //if cursor has moved from start position
        if (last_mouse_x > -1) {

            //distance measured in pixels
            x_dist = last_mouse_x - cursor_x;
            y_dist = last_mouse_y - cursor_y;

            velocity = Math.sqrt(x_dist * x_dist + y_dist * y_dist) / time;

            //output speed 
            document.getElementById("content").textContent = "Speed: " + velocity + " pixels per " + time + " milliseconds";

        }

    });