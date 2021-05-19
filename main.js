var mouseEvent = "empty";
var lastPositionX,lastPositionY;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
width = 1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    currentPositionx = e.clientX - canvas.offsetLeft;
    currentPositionY = e.clientY - canvas.offsetTop;

    if (mouseEvent== "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;    
    
    console.log("last position of x and y are -");
    console.log("x =" + lastPositionX + "y=" + lastPositionY);

    ctx.moveTo(lastPositionX,lastPositionY);

        
    console.log("current position of x and y are -");
    console.log("x =" + currentPositionx + "y=" + currentPositionY);

    ctx.lineTo(currentPositionx,currentPositionY);
    ctx.stroke();

    }
    lastPositionX = currentPositionx;
    lastPositionY = currentPositionY;
}