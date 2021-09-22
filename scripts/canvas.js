var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight-40;

var rectSize = 10, x = canvas.width/2, y = canvas.height-30, dx = 2, dy = 2, color = "#0095DD";

function changeColor(newcolor){
    if(newcolor=="rgb") alert("Ainda tenho que fazer essa opção...");

    color = newcolor;
}

function rectangle() {
    ctx.beginPath();
    ctx.fillRect(x, y, rectSize, rectSize)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rectangle();
    
    if(x + dx > canvas.width-rectSize || x + dx < 0) dx = -dx;
    if(y + dy > canvas.height-rectSize || y + dy < 0) dy = -dy;
    
    x += dx;
    y += dy;
}

function aumenta(){
	rectSize++;
}

function diminui(){
	rectSize--;
}

setInterval(draw, 10);