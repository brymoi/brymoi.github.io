var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight-40;

var rectSize = 10, x = canvas.width/2, y = canvas.height-30, dx = 2, dy = 2, color = "#0095DD", r = 0, g = 0, b = 0;

function changeColor(newcolor){
    color = newcolor;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgb(){
    r += 1; g += 2; b += 3;

    if(r > 255) r = 0;
    else if(g > 255) g = 0;
    else if(b > 255) b = 0;

    ctx.fillStyle = "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

function rectangle() {
    ctx.beginPath();
    ctx.fillRect(x, y, rectSize, rectSize);
    if(color == "rgb") rgb();
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