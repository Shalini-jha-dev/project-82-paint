canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
color = "red";
width_of_line = 2;
radius = 10;
addEventListener("mouseDown", my_mouseDown);

function my_mouseDown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}

addEventListener("mouseUp", my_mouseUp);

function my_mouseUp(e) {
    mouseEvent = "mouseUp"
}

addEventListener("mouseLeave", my_mouseLeave);

function my_mouseLeave() {
    mouseEvent = "mouseLeave"
}

addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("current_position_of_x and y = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

function clear_area() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}