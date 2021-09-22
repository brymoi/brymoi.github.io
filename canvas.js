var canvas = document.getElementById("canvas"), ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth-2;
canvas.height = window.innerHeight-30;

var tam = 10, x = canvas.width/2, y = canvas.height-30, dx = 2, dy = 2;

function retangulo() {
    ctx.beginPath();
    ctx.fillRect(x, y, tam, tam)
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function desenha() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    retangulo();
    
    if(x + dx > canvas.width-tam || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy > canvas.height-tam || y + dy < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

function aumenta(){
	tam++;
}

function diminui(){
	tam--;
}

setInterval(desenha, 10);