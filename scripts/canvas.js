var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight-40;

var rectSize = 10, x = canvas.width/2, y = canvas.height-30, dx = 2, dy = 2, color = "#0095DD",
    r = 255, g = 0, b = 0, bol = 0;

function changeColor(newcolor){
    color = newcolor;
}

function rgb(){

    if (r == 255 && g <= 254 && b == 0) g+=5;
    else if (g == 255 && r >= 1) r-=5;
    else if (g == 255 && b <= 254) b+=5;
    else if (b == 255 && g >= 1) g-=5;
    else if (b == 255 && r <= 254) r+=5;
    else if (r == 255 && b >= 1 && g == 0) b-=5;

    ctx.fillStyle = "rgb(" + r + ", " + g + "," + b + ")";
    console.log("rgb(" + r + ", " + g + "," + b + ")");
}

function rectangle() {
    ctx.beginPath();
    ctx.fillRect(x, y, rectSize, rectSize);
    if(color == "rgb") rgb();
    else ctx.fillStyle = color;
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
