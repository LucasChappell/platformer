const canvas = document.getElementById('gameArea');
const ctx = canvas.getContext('2d');
var boxWidth = 50;
var boxHeight = 50;
function levelStart(){
    clearScreen()
    startX = 50;
    startY = 75;
    square(startX, startY);
    
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
        if (box.x > canvas.width - 50 || box.x < 0)  {
            moveX = -moveX;
        }
    box.x += moveX;
    box.y += moveY;
    ctx.beginPath;
    ctx.fillStyle = 'DarkGrey';
    ctx.fillRect(box.x,box.y,boxWidth,boxHeight);
    ctx.endPath;
    if ((box.y + 60) >= canvas.height){
        moveY = 0;
        box.y = 950;
    } else {
        moveY += gravity;
    }
    if ((box.y) <= 0){
        moveY = 6;
    }
    window.onkeypress = function(event){
        if (event.keyCode == 32){
            moveY = -15;
        }
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
levelStart()



