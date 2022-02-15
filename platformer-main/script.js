const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');
const overScreen = document.getElementById('gameOverScreen');
var boxWidth = 50;
var boxHeight = 50;
var sX = 0;
var sY = 0;
function levelStart(){
    clearScreen()
    startX = 50;
    startY = 75;
    square(startX, startY);
    
} 
   function spike(spikeX, spikeY){
    sX == spikeX;
    sY == spikeY;
    ctx.beginPath;
    ctx.fillStyle = 'Red';
    ctx.moveTo(spikeX, spikeY);
    ctx.lineTo(spikeX-25, spikeY+25)
    ctx.lineTo(spikeX+25, spikeY+25)
    ctx.fill();
    
}

function square(startX, startY) {
    var velo = 10;
    var gravity = .7;
    var p = {x : startX, y : startY} 
    var box = {x: p.x, y: p.y};
    var moveX = velo;
    var moveY = gravity;

    requestAnimationFrame(moveSquare)
    function moveSquare(){
        if (box.x +50 > canvas.width || box.x < 0)  {
            moveX = -moveX;
        }
    box.x += moveX;
    box.y += moveY;
    ctx.beginPath;
    ctx.fillStyle = 'White';
    ctx.fillRect(box.x,box.y,boxWidth,boxHeight);
    ctx.endPath;
    if ((box.y + 50) >= canvas.height){
        moveY = 0;
        box.y = 950;
    } else {
        moveY += gravity;
    }
    if ((box.y) <= 0){
        moveY = 6;
    }
    if (box.x == sX){
        gameover();
        console.log('u suck')
    }
    window.onkeypress = function(event){
        if (event.keyCode == 32){
            moveY = -15;
        }
    }
    spike(934,975)
    console.log(sX)
    if (box.x == 934){
        console.log('hit')
    }
    requestAnimationFrame(moveSquare)
    }
}
function clearScreen(){
    setInterval(clean, 10)
    function clean(){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    
    ctx.beginPath();
    
    }
}
function gameover(){
overScreen.style.opacity = '100%'
}
levelStart()